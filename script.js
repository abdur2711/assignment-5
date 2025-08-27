// get innertext function
function getInnerText(id){
    return document.getElementById(id).innerText;
}

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

// functionality to call button in cards
document.getElementById('call-btn-1').addEventListener('click', function(){
    const serviceName = getInnerText('national-emergency-title');
    const serviceNumber = getInnerText('national-emergency-number');
    const coin = parseInt(getInnerText('coin'));

    if (coin < 20) {
        alert('❌ Not enough coins. At least 20 coins are required to make a call.');
        return;
    }

    alert(`📞 calling ${serviceName} ${serviceNumber}`);
    document.getElementById('coin').innerText = coin - 20;

    const data = {
        name: getInnerText('national-emergency-title'),
        number: getInnerText('national-emergency-number'),
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
});

// call button 2
document.getElementById('call-btn-2').addEventListener('click', function(){
    const serviceName = getInnerText('police-helpline-title');
    const serviceNumber = getInnerText('police-helpline-number');
    const coin = parseInt(getInnerText('coin'));

    if (coin < 20) {
        alert('❌ Not enough coins. At least 20 coins are required to make a call.');
        return;
    }

    alert(`📞 calling ${serviceName} ${serviceNumber}`);
    document.getElementById('coin').innerText = coin - 20;

    const data = {
        name: getInnerText('police-helpline-title'),
        number: getInnerText('police-helpline-number'),
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
});

// call button 3
document.getElementById('call-btn-3').addEventListener('click', function(){
    const serviceName = getInnerText('fire-service-title');
    const serviceNumber = getInnerText('fire-service-number');
    const coin = parseInt(getInnerText('coin'));

    if (coin < 20) {
        alert('❌ Not enough coins. At least 20 coins are required to make a call.');
        return;
    }

    alert(`📞 calling ${serviceName} ${serviceNumber}`);
    document.getElementById('coin').innerText = coin - 20;

    const data = {
        name: getInnerText('fire-service-title'),
        number: getInnerText('fire-service-number'),
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
});

// call button 4
document.getElementById('call-btn-4').addEventListener('click', function(){
    const serviceName = getInnerText('ambulance-title');
    const serviceNumber = getInnerText('ambulance-number');
    const coin = parseInt(getInnerText('coin'));

    if (coin < 20) {
        alert('❌ Not enough coins. At least 20 coins are required to make a call.');
        return;
    }

    alert(`📞 calling ${serviceName} ${serviceNumber}`);
    document.getElementById('coin').innerText = coin - 20;

    const data = {
        name: getInnerText('ambulance-title'),
        number: getInnerText('ambulance-number'),
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
});

// call button 5
document.getElementById('call-btn-5').addEventListener('click', function(){
    const serviceName = getInnerText('women-title');
    const serviceNumber = getInnerText('women-number');
    const coin = parseInt(getInnerText('coin'));

    if (coin < 20) {
        alert('❌ Not enough coins. At least 20 coins are required to make a call.');
        return;
    }

    alert(`📞 calling ${serviceName} ${serviceNumber}`);
    document.getElementById('coin').innerText = coin - 20;

    const data = {
        name: getInnerText('women-title'),
        number: getInnerText('women-number'),
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
});

// call button 6
document.getElementById('call-btn-6').addEventListener('click', function(){
    const serviceName = getInnerText('anti-corruption-title');
    const serviceNumber = getInnerText('anti-corruption-number');
    const coin = parseInt(getInnerText('coin'));

    if (coin < 20) {
        alert('❌ Not enough coins. At least 20 coins are required to make a call.');
        return;
    }

    alert(`📞 calling ${serviceName} ${serviceNumber}`);
    document.getElementById('coin').innerText = coin - 20;

    const data = {
        name: getInnerText('anti-corruption-title'),
        number: getInnerText('anti-corruption-number'),
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
});

// call button 7
document.getElementById('call-btn-7').addEventListener('click', function(){
    const serviceName = getInnerText('electricity-title');
    const serviceNumber = getInnerText('electricity-number');
    const coin = parseInt(getInnerText('coin'));

    if (coin < 20) {
        alert('❌ Not enough coins. At least 20 coins are required to make a call.');
        return;
    }

    alert(`📞 calling ${serviceName} ${serviceNumber}`);
    document.getElementById('coin').innerText = coin - 20;

    const data = {
        name: getInnerText('electricity-title'),
        number: getInnerText('electricity-number'),
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
});

// call button 8
document.getElementById('call-btn-8').addEventListener('click', function(){
    const serviceName = getInnerText('brac-title');
    const serviceNumber = getInnerText('brac-number');
    const coin = parseInt(getInnerText('coin'));

    if (coin < 20) {
        alert('❌ Not enough coins. At least 20 coins are required to make a call.');
        return;
    }

    alert(`📞 calling ${serviceName} ${serviceNumber}`);
    document.getElementById('coin').innerText = coin - 20;

    const data = {
        name: getInnerText('brac-title'),
        number: getInnerText('brac-number'),
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
});

// call button 9
document.getElementById('call-btn-9').addEventListener('click', function(){
    const serviceName = getInnerText('railway-title');
    const serviceNumber = getInnerText('railway-number');
    const coin = parseInt(getInnerText('coin'));

    if (coin < 20) {
        alert('❌ Not enough coins. At least 20 coins are required to make a call.');
        return;
    }

    alert(`📞 calling ${serviceName} ${serviceNumber}`);
    document.getElementById('coin').innerText = coin - 20;

    const data = {
        name: getInnerText('railway-title'),
        number: getInnerText('railway-number'),
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
});



// clear button functionality
document.getElementById('clear-btn').addEventListener('click', function(e){
    callData.length = 0;
    const callHistory = document.getElementById('call-history-container');
    callHistory.innerHTML = '';
});



