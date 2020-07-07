<form style={{}}>
  <h1 style={{ paddingTop: "10rem", fontSize: "3.5rem" }}>
    Instructor Sign Up
  </h1>
  <label htmlFor="name">Name: </label>
  <input type="name" name="name" />
  <br />
  <br />

  <label htmlFor="exercise-type">Exercise Type: </label>
  <input type="text" name="exercise-type" />
  <br />
  <br />

  <label htmlFor="start-time">Start Time: </label>
  <select name="start-time">
    <option>9:00am</option>
    <option>10:00am</option>
    <option>11:00am</option>
    <option>12:00pm</option>
    <option>1:00pm</option>
    <option>2:00pm</option>
    <option>3:00pm</option>
    <option>4:00pm</option>
    <option>5:00pm</option>
  </select>
  <br />
  <br />

  <label htmlFor="duration">Duration: </label>
  <select name="duration">
    <option>30 Minutes</option>
    <option>60 Minutes</option>
    <option>90 Minutes</option>
    <option>120 Minutes</option>
  </select>
  <br />
  <br />

  <div>
    <label htmlFor="intensity-level">Intensity Level: </label>
    <input type="radio" name="intensity-level" /> Easy
    <input type="radio" name="intensity-level" /> Medium
    <input type="radio" name="intensity-level" /> Hard
  </div>
  <br />

  <div>
    <label htmlFor="location">Location: </label>
    <input type="radio" name="location" /> Los Angeles, CA
    <input type="radio" name="location" /> New York, NY
    <input type="radio" name="location" /> Miami, FL
  </div>
  <br />

  <h2 name="current-attendees">Amount of Currently Enrolled: {"5"}</h2>

  <h2 name="max-class-size">Maximum Class Size: {"10"}</h2>
</form>;
