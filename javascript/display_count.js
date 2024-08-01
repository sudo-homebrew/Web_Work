document.addEventListener("DOMContentLoaded", function () {
    updateVisitorCount();
    document.getElementById('resetButton').addEventListener('click', function () {
        resetVisitorCount();
        updateVisitorCount();
    });
});

async function updateVisitorCount() {
    let visitorCountMain = await fetchVisitorCount('main');
    let visitorCountDayCare = await fetchVisitorCount('daycare');
    let visitorCountVisit = await fetchVisitorCount('visit');
    let visitorCountFinal = await fetchVisitorCount('final');
    let visitorCountFinal2 = await fetchVisitorCount('final2');

    console.log(visitorCountMain);
    console.log(visitorCountDayCare);
    console.log(visitorCountVisit);
    console.log(visitorCountFinal);
    console.log(visitorCountFinal2);

    document.getElementById('visitorCountMain').textContent = visitorCountMain;
    document.getElementById('visitorCountDayCare').textContent = visitorCountDayCare;
    document.getElementById('visitorCountVisit').textContent = visitorCountVisit;
    document.getElementById('visitorCountFinal').textContent = visitorCountFinal;
    document.getElementById('visitorCountFinal2').textContent = visitorCountFinal2;
}
async function fetchVisitorCount(page) {
    try {
        const response = await fetch(`http://localhost:3000/api/visitor-count/${page}`);
        const data = await response.json();
        return data.count;
    } catch (error) {
        console.error('Error fetching visitor count:', error);
    }
    return 0;
}


async function resetVisitorCount() {
    try {
        const response = await fetch('http://localhost:3000/reset', {
            method: 'GET'
        });

        if (response.ok) {
            console.log('Visitor count reset successfully');
        } else {
            console.error('Failed to reset visitor count');
        }
    } catch (error) {
        console.error('Error:', error);
    }
    return 0;
}