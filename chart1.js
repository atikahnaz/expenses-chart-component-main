const ctx = document.getElementById("myChart");
fetch("data.json")
  .then((response) => response.json())
  .then((json) => {
    const day = json.map((item) => item.day);
    const amount = json.map((item) => item.amount);
    //console.log(day);

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: day,
        datasets: [
          {
            label: "# of Votes",
            data: amount,
            backgroundColor: "hsl(10, 79%, 65%)",
            hoverBackgroundColor: "hsl(186, 34%, 60%)",
            borderRadius: 3,
            borderSkipped: false,
          },
        ],
      },
      options: {
        layout: {
          padding: {},
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            yAlign: "bottom",
            caretSize: 0,
            caretPadding: 5,
            displayColors: false,
            callbacks: {
              title: function () {
                return ""; // Remove the title (x-axis data)
              },
              label: function (context) {
                const value = context.parsed.y;
                return `$${value}`;
              },
            },
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
              offset: true,
            },
            border: {
              display: false,
            },
          },
          y: {
            beginAtZero: true,
            grid: {
              display: false,
            },
            border: {
              display: false,
            },
            ticks: {
              display: false,
            },
          },
        },
      },
    });
  });
