document.addEventListener("DOMContentLoaded", function() {
    incrementVisitorCount('main');
});

async function incrementVisitorCount(page) {
    try {
        const response = await fetch(`http://localhost:3000/api/visitor-count/${page}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        await response.json();
    } catch (error) {
        console.error('Error incrementing visitor count:', error);
    }
}