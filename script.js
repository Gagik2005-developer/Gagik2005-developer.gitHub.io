const rotateSlot = document.querySelector('.rotateSlot');
const openClosed = document.querySelector('.openClosed');
const firstPage = document.querySelector('.firstPage');
const beginGame = document.querySelector('.beginGame');
const container = document.querySelectorAll('.container');
const items = document.querySelectorAll('.items');
const money = document.querySelector('h1');

let myMoney = Math.round(Math.random() * 150) * 100;
money.textContent = myMoney + '֏';



function comon() {
    container[0].style.left = '0vh';
    container[1].style.bottom = '0vh';
    container[2].style.right = '0vh';
    items.forEach((items, index) => {
        items.style.transform = 'rotateX(calc(var(--f) * 24deg)) translateZ(375px)';
    });
}

function go() {
    container[0].style.left = '200vh';
    container[1].style.bottom = '200vh';
    container[2].style.right = '200vh';
    items.forEach((items, index) => {
        items.style.transform = 'rotateX(calc(var(--f) * 24deg)) translateZ(0px)';
    });
}

beginGame.onclick = function () {
    if (myMoney >= 700) {
        setTimeout(() => {
            firstPage.style.clipPath = 'polygon(0 0, 100% 0, 100% 0, 0 0)';
        }, 500);

        this.style.transform = 'scale(15) translateY(-150%)';

        setTimeout(() => {
            openClosed.style.bottom = '0';
        }, 1000);
    }

    else {
        alert('You have not a Money');
        return false;
    }
}


let w = 0;
openClosed.onclick = function () {
    w++;
    if (w == 1) {
        this.style.bottom = '93%';
        this.style.left = '0%';
        this.style.transform = 'translate(0%, 0%)';
        this.textContent = 'Closed';
        rotateSlot.setAttribute('style', 'bottom : 0%;');
        comon();
    }
    else {
        w = 0;
        this.style.bottom = '0%';
        this.style.left = '50%';
        this.style.transform = 'translate(-50%, -50%)';
        this.textContent = 'Open';
        rotateSlot.setAttribute('style', 'bottom : 150%;');
        go();
    }
}


// Partweluc gumary pakasi 700_ow;
// erb hasni 0_in - Chgna => Poxareny => Alert you have not a money;

rotateSlot.onclick = function () {
    // patrasteluc gumar pakasi 700_ow;
    if (myMoney >= 700) {
        myMoney -= 700;
        // erb hasni 0_in - Chgna => Poxareny => Alert you have not a money;
        money.textContent = myMoney + '֏';
        container.forEach((allContainers, index) => {
            let forRotateRandom = Math.round(Math.random() * 4) * 28;
            allContainers.style.transform = `rotateX(${forRotateRandom * 10}deg)`;
            if (container[0].style.transform == container[1].style.transform && container[1].style.transform == container[2].style.transform) {

                setTimeout(() => {
                    // haxteluc krknapati naxnakan gumarin
                    myMoney += 5000;
                    money.textContent = myMoney + '֏';
                }, 2000)


                const winnerOne = document.createElement('div');
                winnerOne.className = 'winnerOne';
                document.body.append(winnerOne);

                const winnerTwo = document.createElement('div');
                winnerTwo.className = 'winnerTwo';
                document.body.append(winnerTwo);

                let start = setInterval(() => {
                    const cent = document.createElement('div');
                    cent.className = 'cent';
                    document.body.append(cent);

                    let l = Math.round(Math.random() * 100) + '%';

                    setTimeout(() => {
                        cent.remove();
                    }, 9000);
                    setTimeout(() => {
                        cent.style.opacity = '1';
                        setTimeout(() => {
                            cent.style.top = '150%'
                            cent.style.left = Math.round(Math.random() * 100) + '%';
                            cent.style.transform = `translateX(${l})`

                        }, 500);
                    }, 1000);
                }, 100);

                setTimeout(() => {
                    clearInterval(start);
                }, 9000)

                setTimeout(() => {
                    openClosed.style.left = '100%';
                    rotateSlot.style.bottom = '100%';
                    go();
                    setTimeout(() => {
                        winnerOne.style.opacity = '1';
                        winnerTwo.style.opacity = '1';
                        setTimeout(() => {
                            winnerOne.style.opacity = '0';
                            winnerTwo.style.opacity = '0';
                            setTimeout(() => {
                                openClosed.style.left = '0%';
                                rotateSlot.style.bottom = '0%';
                                comon();
                            }, 1000);
                        }, 5000);
                    }, 1000);
                }, 2000);
            }
        })
    }

    else {
        return false
    }
}

