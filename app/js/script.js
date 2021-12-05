// console.log("Hello World !");

var period = '';

var data = {
    "work": {
        "daily": {
            "current": "5hrs",
            "previous": "7hrs"
        },
        "weekly": {
            "current": "32hrs",
            "previous": "36hrs"
        },
        "monthly": {
            "current": "103hrs",
            "previous": "182hrs"
        }

    },
    "play": {
        "daily": {
            "current": "1hr",
            "previous": "2hrs"
        },
        "weekly": {
            "current": "10hrs",
            "previous": "8hrs"
        },
        "monthly": {
            "current": "23hrs",
            "previous": "29hrs"
        }
    },
    "study": {
        "daily": {
            "current": "0hrs",
            "previous": "1hr"
        },
        "weekly": {
            "current": "4hrs",
            "previous": "7hrs"
        },
        "monthly": {
            "current": "13hrs",
            "previous": "19hrs"
        }

    },
    "exercise": {
        "daily": {
            "current": "1hr",
            "previous": "1hr"
        },
        "weekly": {
            "current": "4hrs",
            "previous": "5hrs"
        },
        "monthly": {
            "current": "11hrs",
            "previous": "18hrs"
        }

    },
    "social": {
        "daily": {
            "current": "1hr",
            "previous": "3hr"
        },
        "weekly": {
            "current": "5hrs",
            "previous": "10hrs"
        },
        "monthly": {
            "current": "21hrs",
            "previous": "23hrs"
        }

    },
    "self_care": {
        "daily": {
            "current": "0hr",
            "previous": "1hr"
        },
        "weekly": {
            "current": "2hrs",
            "previous": "2hrs"
        },
        "monthly": {
            "current": "7hrs",
            "previous": "11hrs"
        }

    },
}

var type_array = ['work', 'play', 'study', 'exercise', 'social', 'self_care'];

function update(period) {
    var c, p;
    Object.entries(data).forEach(([key1, value1]) => {

        c = value1[period]['current'];
        p = value1[period]['previous'];
        document.getElementById('current' + '_' + key1).textContent = c;
        document.getElementById('previous' + '_' + key1).textContent = 'Previous -' + p;
    });

}

document.getElementById('show_daily').addEventListener('click', function() {
    update('daily');
});
document.getElementById('show_weekly').addEventListener('click', function() {
    update('weekly');
});
document.getElementById('show_monthly').addEventListener('click', function() {
    update('monthly');
});