document.addEventListener('DOMContentLoaded', () => {
    const flexContainer = document.getElementById('flexContainer');
    const boxes = document.querySelectorAll('.box');

    document.getElementById('resetFlexbox').addEventListener('click', () => {
        flexContainer.style.flexDirection = 'column';
        flexContainer.style.justifyContent = 'flex-start';
        flexContainer.style.alignItems = 'flex-start';
        flexContainer.style.gap = '0px';
        boxes.forEach(box => box.style.flexGrow = '0');
    });

    document.getElementById('gapButton').addEventListener('click', () => {
        const gapValue = document.getElementById('gapInput').value;
        flexContainer.style.gap = `${gapValue}px`;
    });

    document.getElementById('flexRow').addEventListener('click', () => flexContainer.style.flexDirection = 'row');
    document.getElementById('flexColumn').addEventListener('click', () => flexContainer.style.flexDirection = 'column');

    document.getElementById('justifyStart').addEventListener('click', () => flexContainer.style.justifyContent = 'flex-start');
    document.getElementById('justifyEnd').addEventListener('click', () => flexContainer.style.justifyContent = 'flex-end');
    document.getElementById('justifyCenter').addEventListener('click', () => flexContainer.style.justifyContent = 'center');
    document.getElementById('justifySpaceBetween').addEventListener('click', () => flexContainer.style.justifyContent = 'space-between');
    document.getElementById('justifySpaceEvenly').addEventListener('click', () => flexContainer.style.justifyContent = 'space-evenly');
    document.getElementById('justifySpaceAround').addEventListener('click', () => flexContainer.style.justifyContent = 'space-around');

    document.getElementById('alignStart').addEventListener('click', () => flexContainer.style.alignItems = 'flex-start');
    document.getElementById('alignEnd').addEventListener('click', () => flexContainer.style.alignItems = 'flex-end');
    document.getElementById('alignCenter').addEventListener('click', () => flexContainer.style.alignItems = 'center');

    document.getElementById('resetGrow').addEventListener('click', () => boxes.forEach(box => box.style.flexGrow = '0'));
    document.getElementById('growAll').addEventListener('click', () => boxes.forEach(box => box.style.flexGrow = '1'));

    document.getElementById('growBox1').addEventListener('click', () => boxes[0].style.flexGrow = document.getElementById('growBox1Input').value);
    document.getElementById('growBox2').addEventListener('click', () => boxes[1].style.flexGrow = document.getElementById('growBox2Input').value);
    document.getElementById('growBox3').addEventListener('click', () => boxes[2].style.flexGrow = document.getElementById('growBox3Input').value);
});