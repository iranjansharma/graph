let xmlhttp = new XMLHttpRequest();
const url =
  "https://raw.githubusercontent.com/ranjanshrma2003/jsondata/main/dataset.json";

xmlhttp.open("GET", url, true);
xmlhttp.send();

xmlhttp.onreadystatechange = function () {
  let status = xmlhttp.status;
  if (this.status === 200 && this.readyState == 4) {
    let data = JSON.parse(this.responseText);
    // console.log(data);
    let time = data.dataset.map((elem) => {
      return elem.time;
    });
    let chan1 = data.dataset.map((elem) => {
      return elem.chan1;
    });
    let date = data.dataset.map((elem) => {
      return elem.time;
    });

    let chan2 = data.dataset.map((elem) => {
      return elem.chan2;
    });
    let chan3 = data.dataset.map((elem) => {
      return elem.chan3;
    });
    let chan4 = data.dataset.map((elem) => {
      return elem.chan4;
    });
    let chan5 = data.dataset.map((elem) => {
      return elem.chan5;
    });
    let chan6 = data.dataset.map((elem) => {
      return elem.chan6;
    });
    let chan7 = data.dataset.map((elem) => {
      return elem.chan7;
    });
    let chan8 = data.dataset.map((elem) => {
      return elem.chan8;
    });

    console.log(chan8);

    let ctx = document.getElementById("Chart").getContext("2d");
    let myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: time,
        datasets: [
          {
            label: "Channel-1",
            data: chan1,
            backgroundColor: "transparent",
            borderColor: "red",
            borderWidth: 2,
          },
          {
            label: "Channel-2",
            data: chan2,
            backgroundColor: "transparent",
            borderColor: "#2A0944",
            borderWidth: 2,
            hidden: true,
          },
          {
            label: "Channel-3",
            data: chan3,
            backgroundColor: "transparent",
            borderColor: "#911F27",
            borderWidth: 2,
            hidden: true,
          },
          {
            label: "Channel-4",
            data: chan4,
            backgroundColor: "transparent",
            borderColor: "#FEC260",
            borderWidth: 2,
            hidden: true,
          },
          {
            label: "Channel-5",
            data: chan5,
            backgroundColor: "transparent",
            borderColor: "#F037A5",
            borderWidth: 2,
            hidden: true,
          },
          {
            label: "Channel-6",
            data: chan6,
            backgroundColor: "transparent",
            borderColor: "#FF2442",
            borderWidth: 2,
            hidden: true,
          },
          {
            label: "Channel-7",
            data: chan7,
            backgroundColor: "transparent",
            borderColor: "#FFE459",
            borderWidth: 2,
            hidden: true,
          },
          {
            label: "Channel-8",
            data: chan8,
            backgroundColor: "transparent",
            borderColor: "#2D2424",
            borderWidth: 2,
            hidden: true,
          },
        ],
      },

      option: {
        scales: {
          y: {
            beginAtZero: false,
          },
        },
        title: {
          display: true,
          text: "Heat tratment Data",
          fontSize: 25,
        },
      },
    });
  }
};
