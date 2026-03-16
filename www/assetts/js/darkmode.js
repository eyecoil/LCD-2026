
// Function to toggle between 'light' and 'dark'
const toggleTheme = () => {
  const html = document.documentElement;
  // currentTheme = localStorage.getItem(bsTheme);
  currentTheme = html.getAttribute('data-bs-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-bs-theme', newTheme);
  localStorage.setItem('bsTheme', newTheme); // Persist setting
};
// Add listener to button
document.getElementById('darkModeSwitch').addEventListener('change', toggleTheme);