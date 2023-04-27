// menampilkan alert setelah form di-submit
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
	event.preventDefault();
	alert('Kegiatan olahraga berhasil di-upload!');
});

// Data kegiatan olahraga yang di-upload oleh pengguna
const activities = [
    {
      name: "Lari Pagi",
      date: "2023-04-15T06:00",
      location: "Taman Menteng",
      description: "Lari santai sejauh 5 km",
      participants: ["Alex", "Vici"]
    },
    {
      name: "Bersepeda Santai",
      date: "2023-04-17T08:00",
      location: "Keliling Kota Manado",
      description: "Bersepeda santai menikmati keindahan alam",
      participants: ["Alex"]
    }
  ];
  
  // Fungsi untuk menampilkan data kegiatan olahraga
  function displayActivities() {
    const activitiesContainer = document.getElementById("activities");
  
    // Hapus semua postingan sebelumnya
    activitiesContainer.innerHTML = "";
  
    // Tampilkan postingan terbaru
    for (let i = activities.length - 1; i >= 0; i--) {
      const activity = activities[i];
  
      const activityDiv = document.createElement("div");
      activityDiv.classList.add("activity");
  
      const nameHeading = document.createElement("h3");
      nameHeading.textContent = activity.name;
      activityDiv.appendChild(nameHeading);
  
      const dateParagraph = document.createElement("p");
      dateParagraph.textContent = new Date(activity.date).toLocaleString();
      activityDiv.appendChild(dateParagraph);
  
      const locationParagraph = document.createElement("p");
      locationParagraph.textContent = activity.location;
      activityDiv.appendChild(locationParagraph);
  
      const descriptionParagraph = document.createElement("p");
      descriptionParagraph.textContent = activity.description;
      activityDiv.appendChild(descriptionParagraph);
  
      const participantsParagraph = document.createElement("p");
      participantsParagraph.textContent = "Peserta: " + activity.participants.join(", ");
      activityDiv.appendChild(participantsParagraph);
  
      const joinButton = document.createElement("button");
      joinButton.classList.add("join-btn");
      joinButton.textContent = "Bergabung";
      joinButton.addEventListener("click", function() {
        activity.participants.push("Selamat Bergabung");
        displayActivities();
      });
      activityDiv.appendChild(joinButton);
  
      activitiesContainer.appendChild(activityDiv);
    }
  }
  
  // Panggil fungsi untuk menampilkan data kegiatan olahraga
  displayActivities();