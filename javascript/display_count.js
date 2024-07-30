document.addEventListener("DOMContentLoaded", function() {
    updateVisitorCount();
});

function updateVisitorCount() {
    let visitorCountMain = fetchVisitorCount('main');
    let visitorCountDayCare = fetchVisitorCount('daycare');
    let visitorCountVisit = fetchVisitorCount('visit');
    let visitorCountFinal = fetchVisitorCount('final');
    let visitorCountFinal2 = fetchVisitorCount('final2');

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