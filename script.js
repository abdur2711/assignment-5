// function to count hearts
function heartIncrements(id) {
    const heartCount = parseInt(document.getElementById(id).innerText);
    parseInt(document.getElementById(id).innerText = heartCount + 1);
    return heartCount;
}

function heartCount(id){
    document.getElementById(id).addEventListener('click', function(){
        heartIncrements('heart-count');
    });
}

heartCount('heart-1');
heartCount('heart-2');
heartCount('heart-3');
heartCount('heart-4');
heartCount('heart-5');
heartCount('heart-6');
heartCount('heart-7');
heartCount('heart-8');
heartCount('heart-9');

const callData = [];
const callButtons = document.querySelectorAll('.call-btn');

// reusable call button functionality using for loop
for (let i = 0; i < callButtons.length; i++) {
    callButtons[i].addEventListener('click', function (){

        const serviceName = document.querySelectorAll('.service-title')[i].innerText;
        const serviceNumber = document.querySelectorAll('.service-contact')[i].innerText;
        const coin = parseInt(document.getElementById('coin').innerText);

        if (coin < 20) {
            alert('❌ Not enough coins. At least 20 coins are required to make a call.');
            return;
        }

        alert(`📞 calling ${serviceName} ${serviceNumber}`);
        document.getElementById('coin').innerText = coin - 20;

        const data = {
            name: document.querySelectorAll('.service-title')[i].innerText,
            number: document.querySelectorAll('.service-contact')[i].innerText,
            date: new Date().toLocaleTimeString()
        }
        callData.push(data);

        const callHistory = document.getElementById('call-history-container');
        callHistory.innerText = '';

        for (const data of callData) {
            const div = document.createElement('div');
            div.innerHTML = `
                <div class="bg-[#FAFAFA] rounded-lg p-4 mb-2 flex justify-between items-center">
                    <div>
                        <h3 class="text-lg font-semibold text-[#111111]">${data.name}</h3>
                        <p class="text-lg font-normal text-[#5C5C5C]">${data.number}</p>
                    </div>
                    <p class="text-lg font-normal text-[#111111]">${data.date}</p>
                </div>
            `
            callHistory.appendChild(div);
        }
    })
}

// clear button functionality
document.getElementById('clear-btn').addEventListener('click', function(e){
    callData.length = 0;
    const callHistory = document.getElementById('call-history-container');
    callHistory.innerHTML = '';
});
