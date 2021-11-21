//fetch("https://othonmyblog.herokuapp.com")
//fetch("http://localhost:3000/posts")
//from DELL
fetch("http://192.168.2.6/posts")
  .then((res) => res.json())
  .then((data) => {
    let output = "";
    for (let i = 0; i < 3; i++) {
      output += `
        <div class="card" style="width: 30%; min-width:20rem">
        <div class="card-body">
          <div class="card-title" style="text-align:center"> ${data[i].title}</div>
          <div class="card-subtitle" mb-2 text-muted"> ${data[i].date}</div>
          <div class="card-text mt-4"> ${data[i].description}</div>
          <a href="#" class="btn btn-primary">Read more</a>
          </div>
        </div>`;
    }
    document.getElementById("output").innerHTML = output;

    let output2 = "";
    for (let i = 3; i < data.length; i++) {
      output2 += `
        <div class="card" style="width: 20%; min-width:10rem">
        <div class="card-body">
          <div class="card-title" style="text-align:center"> ${data[i].title}</div>
          <div class="card-subtitle" mb-2 text-muted"> ${data[i].date}</div>
          <div class="card-text mt-4"> ${data[i].description}</div>
          <a href="#" class="btn btn-primary">Read more</a>
          </div>
        </div>`;
    }

    document.getElementById("output2").innerHTML = output2;
  });
