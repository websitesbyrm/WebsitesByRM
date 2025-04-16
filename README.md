* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', sans-serif;
}

body {
  background-color: #fefefe;
  color: #333;
  line-height: 1.6;
}

header {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
}

nav a {
  margin-left: 20px;
  text-decoration: none;
  color: #555;
}

nav a:hover {
  color: #000;
}

.hero {
  padding: 60px 20px;
  text-align: center;
  background-color: #f9f9f9;
}

.services {
  padding: 40px 20px;
  text-align: center;
}

.service-cards {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  flex-wrap: wrap;
}

.card {
  background-color: white;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 10px;
  width: 200px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

footer {
  text-align: center;
  padding: 20px;
  font-size: 0.9em;
  color: #888;
  border-top: 1px solid #ddd;
  margin-top: 40px;
}
