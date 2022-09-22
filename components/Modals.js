let createModal = (modalId, modalLabelId, modalTitle, stageTitle, inputType,inputID, placeholder, submitBtnID, nextModalID) => {
  let modal;
  modal = `<div class="modal fade" id="${modalId}" tabindex="-1" aria-labelledby="${modalLabelId}" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header bg-blue text-white">
          <h5 class="modal-title" id="${modalLabelId}">${modalTitle}</h5>
          <button class="btn-close text-white bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="d-flex">
            <p class="mx-auto text-center">
              ${stageTitle}
            </p>
          </div>
          <div class="d-flex my-3">
            <div class="row g-0 mx-auto border">
            ${
              inputType === 'phoneNumber' ? '<div class="col-2"><input type="text" name="" disabled class="form-control rounded-0" value="+91"></div>' : ''
            }
              <div class="col">
                <input type="number" id="${inputID}" class="form-control rounded-0" placeholder="${placeholder}">
              </div>
            </div>
          </div>
          <div class="d-flex my-3">
            <button class="btn btn-teal mx-auto px-4" data-bs-dismiss="modal" data-bs-target="#${nextModalID ? nextModalID : modalId}" data-bs-toggle="modal" id="${submitBtnID}">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  return modal;
}

export default createModal;