import React from 'react';
import { useEffect } from 'react';
export default function VideoModal() {
  useEffect(() => {
    // Get DOM Elements
    const modal = document.querySelector('#my-modal');
    const modalBtn = document.querySelector('#modal-btn');
    const closeBtn = document.querySelector('.close');

    // Events
    modalBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', outsideClick);

    // Open
    function openModal() {
      modal.style.display = 'block';
    }

    // Close
    function closeModal() {
      modal.style.display = 'none';
    }

    // Close If Outside Click
    function outsideClick(e) {
      if (e.target == modal) {
        modal.style.display = 'none';
      }
    }
  });

  return (
    <>
      <div id="my-modal" class="modal">
        <div class="modal-content">
          <div class="modal-header">
            <span class="close">&times;</span>
            <h2>Modal Header</h2>
          </div>
          <div class="modal-body">
            <p>This is my modal</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              repellendus nisi, sunt consectetur ipsa velit repudiandae aperiam
              modi quisquam nihil nam asperiores doloremque mollitia dolor
              deleniti quibusdam nemo commodi ab.
            </p>
          </div>
          <div class="modal-footer">
            <h3>Modal Footer</h3>
          </div>
        </div>
      </div>
    </>
  );
}
