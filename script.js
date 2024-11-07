function calculateAges() {
    const birthYear = parseInt(document.getElementById('birthYear').value);
    const birthMonth = parseInt(document.getElementById('birthMonth').value);
    const birthDay = parseInt(document.getElementById('birthDay').value);

    if (isNaN(birthYear) || isNaN(birthMonth) || isNaN(birthDay)) {
        alert("모든 필드를 올바르게 입력하세요.");
        return;
    }

    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1; // 월은 0부터 시작하므로 1을 더함
    const currentDay = today.getDate();

    // 한국 나이 계산
    const koreanAge = currentYear - birthYear + 1;
    document.getElementById('koreanAge').textContent = `한국 나이: ${koreanAge}살`;

    // 만 나이 계산
    let internationalAge = currentYear - birthYear;
    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
        internationalAge -= 1;
    }
    document.getElementById('internationalAge').textContent = `만 나이: ${internationalAge}살`;
}