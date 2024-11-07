function calculateAges() {
    const birthYear = parseInt(document.getElementById('birthYear').value);
    const birthMonth = parseInt(document.getElementById('birthMonth').value);
    const birthDay = parseInt(document.getElementById('birthDay').value);

    if (isNaN(birthYear) || isNaN(birthMonth) || isNaN(birthDay)) {
        alert("Please enter all fields correctly.");
        return;
    }

    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1;
    const currentDay = today.getDate();

    // Calculate Korean Age
    const koreanAge = currentYear - birthYear + 1;
    document.getElementById('koreanAge').textContent = `Korean Age: ${koreanAge} years old`;

    // Calculate International Age
    let internationalAge = currentYear - birthYear;
    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
        internationalAge -= 1;
    }
    document.getElementById('internationalAge').textContent = `International Age: ${internationalAge} years old`;
}
