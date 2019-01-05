import React from "react";

const Services = () => (
  <div class="card-deck offset_content">
     
    <div class="card">
    <img class="card-img-top" src={require("../Images/cohort_9.jpg")} alt="Card image" />
      <div class="card-body text-center">
        <p class="card-text">
          Some text inside the first card Some more text to increase the height
          Some more text to increase the height Some more text to increase the
        </p>
      </div>
    </div>
    <div class="card">
      <img class="card-img-top" src={require('../Images/patrick.jpg')} alt="Card image" />
      <div class="card-body text-center">
        <p class="card-text">
          Some text inside the second card Some text inside the first card Some
          more text to increase the height Some more text to increase the height
        </p>
      </div>
    </div>
    <div class="card">
      <img class="card-img-top" src={require("../Images/cohort_9.jpg")} alt="Card image" />
      <div class="card-body text-center">
        <p class="card-text">
          Some text inside the third card Some text inside the first card Some
          more text to increase the height Some more text to increase the height
        </p>
      </div>
    </div>
  </div>
);

export default Services;
