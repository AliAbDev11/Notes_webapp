// Function to delete note
function deleteNote(noteId) {
    fetch("/delete-note", {
      method: "POST",
      body: JSON.stringify({ noteId: noteId }),
    }).then((_res) => {
      window.location.href = "/";
    });
}
  
// Function to hide flash messages after a given duration
/*
function hideFlashMessages() {
    var flashMessages = document.querySelectorAll('.flash-message');
    flashMessages.forEach(function(message) {
        setTimeout(function() {
            message.style.display = 'none';
        }, 2000); // 2000 milliseconds = 2 seconds
    });
}
// Call the function when the page loads
window.onload = hideFlashMessages;*/