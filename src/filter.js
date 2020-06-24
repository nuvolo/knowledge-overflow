export function filterSetup(mod) {
  marked.setOptions({
    breaks: true
  });

  mod.filter("renderHtml", function () {
    return function (val) {
      if (val) {
        var div = document.createElement("div");
        div.innerHTML = marked(val);
        var list = div.getElementsByTagName("code");
        for (var i = 0; i < list.length; i++) {
          if (list[i].parentNode.nodeName === "PRE") {
            list[i].innerHTML = PR.prettyPrintOne(
              list[i].innerHTML,
              null,
              true
            );
          } else {
            list[i].innerHTML = PR.prettyPrintOne(list[i].innerHTML);
          }
        }
        return div.innerHTML;
      }
      return "";
    };
  });

  mod.filter("fixAttachments", [
    "$sce",
    function ($sce) {
      let download = function (url) {
        let meta_url = url.slice(0, -5); //url without /file suffix
        let meta_request = new Request(meta_url, {
          method: "GET",
          headers: new Headers({
            "X-UserToken": window.g_ck,
            accept: "application/json"
          })
        });
        let file_request = new Request(url, {
          method: "GET",
          headers: new Headers({
            "X-UserToken": window.g_ck,
            accept: "application/json"
          })
        });
        fetch(meta_request)
          .then((res) => res.json())
          .then((d) => d.result.file_name)
          .then((file_name) => {
            fetch(file_request)
              .then((res) => res.blob())
              .then((blob) => {
                const dl = window.URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.style.display = "none";
                a.href = dl;
                a.download = file_name;
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(dl);
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err);
          });
      };

      return function (val) {
        let div = document.createElement("div");
        div.innerHTML = val;
        for (let el of div.getElementsByTagName("a")) {
          if (
            el.href.slice(0, 55) ===
            "https://nuvolodev.service-now.com/api/now/v1/attachment"
          ) {
            let url = el.href;
            el.removeAttribute("href");
            el.setAttribute("onClick", `(${download.toString()})('${url}')`);
          }
        }
        return $sce.trustAsHtml(div.innerHTML);
      };
    }
  ]);

  mod.filter("formatDate", function () {
    return function (d, local) {
      if (d) {
        if (!local) {
          d = d.replace(" ", "T") + "Z";
          d = new Date(d);
        }
        var hr = d.getHours();
        var min = d.getMinutes();
        min = ("0" + min).slice(-2);
        var mo = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ][d.getMonth()];
        var yr = d.getFullYear().toString().slice(2);
        var date = d.getDate();
        return mo + " " + date + ", '" + yr + " at " + hr + ":" + min;
      }
    };
  });

  mod.filter("formatShortDate", function () {
    return function (d, local) {
      if (d) {
        if (!local) {
          d = d.replace(" ", "T") + "Z";
          d = new Date(d);
        }
        var mo = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ][d.getMonth()];
        var yr = d.getFullYear().toString().slice(2);
        var date = d.getDate();
        return mo + " " + date + ", " + yr;
      }
    };
  });
}
