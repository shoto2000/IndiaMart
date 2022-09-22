function bsorder() {
  return `
   
    <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body d-flex">
          <div class="image">
            <div class="image_img"></div>
            <div class="span">
              <p>
                <span style="color: gray">Sold By</span> - Blue Heaven
                Cosmetics (P) Ltd, New Delhi, Delhi
              </p>
            </div>
          </div>

          <div class="input">
            <h4>
              Adding a few details of your requirement can get you quick
              response from the supplier
            </h4>

            <p>Quantity</p>
            <div class="quantity">
              <input type="text" name="" id="" />
              <p>Pieces</p>
            </div>
            <p>Total Order Value(Rs)</p>
            <select name="" class="priceRange">
              <option value="">Select a value</option>
              <option value="1k">Upto 1,000</option>
              <option value="1k3k">1,000 to 3,000</option>
              <option value="3k10k">3,000 to 10,000</option>
              <option value="10k20k">10,000 to 20,000</option>
              <option value="20k50k">20,000 to 50,000</option>
              <option value="50k1l">50,000 to 1 Lakh</option>
              <option value="1l2l">1 to 2 Lakh</option>
              <option value="2l5l">2 to 5 Lakh</option>
              <option value="5l10l">5 to 10 Lakh</option>
              <option value="10l20l">10 to 20 Lakh</option>
              <option value="20l50l">20 to 50 Lakh</option>
              <option value="50l1c">50 Lakh to 1 Crore</option>
              <option value="M1c">More than 1 Crore</option>
            </select>

            <p>Usage</p>
            <div class="checkbox">
              <div>
                <input type="checkbox" value="Personal" />
                <p>Personal</p>
              </div>
              <div>
                <input type="checkbox" value="Parlour" />
                <p>Parlour</p>
              </div>

              <input type="text" placeholder="Other Option" required />
            </div>

            <button
              id="next"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal1"
            >
              Next
            </button>
          </div>
        </div>
        <div class="modal-footer"></div>
      </div>
    </div>
  </div>
  <!-- modal ends  -->

  <!-- modal 1 starts -->
  <div
    class="modal fade"
    id="exampleModal1"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body d-flex">
          <div class="image1">
            <div class="image1_img"></div>
            <div class="span1">
              <p>
                <span style="color: gray">Sold By</span> - Blue Heaven
                Cosmetics (P) Ltd, New Delhi, Delhi
              </p>
            </div>
          </div>
          <div class="input1">
            <h4>Almost done!</h4>
            <p>Preferred Brand</p>
            <input type="text" name="" id="pbrand" />

            <p>Why do you need this</p>
            <div class="checkbox1">
              <div>
                <input type="checkbox" name="" id="" value="Resell" />
                <p>For Reselling</p>
              </div>

              <div>
                <input type="checkbox" name="" id="" value="business" />
                <p>For Business</p>
              </div>

              <div>
                <input type="checkbox" name="" id="" value="home use" />
                <p>For Home Use</p>
              </div>
            </div>

            <div class="inputfield1">
              <p>Requirement Details</p>
              <textarea
                name=""
                id=""
                cols="50"
                rows="3"
                placeholder="Additional details about your requirement"
              ></textarea>
            </div>
            <div class="buttons1">
              <button
                class="back1"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <
              </button>
              <button
                class="next1"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal2"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal 1 ends  -->

  <!-- modal 2 starts -->

  <div
    class="modal fade"
    id="exampleModal2"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body d-flex">
          <div class="image2">
            <div class="image2_img"></div>
            <div class="span2">
              <p>
                <span style="color: gray">Sold By</span> - Blue Heaven
                Cosmetics (P) Ltd, New Delhi, Delhi
              </p>
            </div>
          </div>
          <div class="input2">
            <h4>
              Please provide a few details to get quick response from the
              supplier
            </h4>

            <div class="input2in">
              <div class="inputbox">
                <input type="text" required="required" />
                <span>Company / Business Name</span>
              </div>
              <div class="inputbox">
                <input type="text" required="required" />
                <span>GST Number</span>
              </div>
            </div>

            <div class="buttons2">
              <button
                class="back2"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal1"
              >
                <
              </button>
              <button
                class="next2"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal3"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- modal 2 Ends -->

  <!-- Button trigger modal -->

  <!-- Modal 3 starts -->
  <div
    class="modal fade"
    id="exampleModal3"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <div>
            <div class="thankyou">
              <img
                src="https://cdn-icons-png.flaticon.com/512/463/463574.png"
                alt=""
              />
              <h4>Thank You!</h4>
            </div>

            <div>
              <p>
                Your requirement has been sent to
                <span> Blue Heaven Cosmetics (P) Ltd</span>
                Verify your email as suppliers are more likely to contact
                verified buyers.
              </p>
            </div>
          </div>

          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body d-flex">
          <div>
            <h5 class="sim">Shop Similar Products Now</h5>
            <div class="similar">
              <div>
                <img
                  src="http://5.imimg.com/data5/ECOM/Default/2022/5/OV/MA/BH/112041886/jpg-20220424-122355-0000-250x250.jpg"
                  alt=""
                />
                <p>Natural And Chemical Free Lipstick</p>
                <h5>₹ 450</h5>
                <button>Buy Now</button>
              </div>
              <div>
                <img
                  src="http://5.imimg.com/data5/ECOM/Default/2022/6/UU/PA/IS/9422220/hair-nose-lip-3-color-single-lipstick-moisturizing-color-waterproof-temptation-of-angels-222-250x250.jpg"
                  alt=""
                />
                <p>3-color Single Lipstick Moisturizing Color</p>
                <h5>₹ 1,499</h5>
                <button>Buy Now</button>
              </div>
              <div>
                <img
                  src="http://5.imimg.com/data5/ECOM/Default/2022/6/MW/IC/CX/40991549/omg-250x250.jpg"
                  alt=""
                />
                <p>Sleek MakeUp O.M.G: Sleek Make Up</p>
                <h5>₹ 499</h5>
                <button>Buy Now</button>
              </div>
              <div>
                <img
                  src="http://5.imimg.com/data5/ECOM/Default/2022/6/HW/MR/XY/61819412/florallips2-250x250.jpg"
                  alt=""
                />
                <p>Floral Lips Moblie Protection</p>
                <h5>₹ 699</h5>
                <button>Buy Now</button>
              </div>
              <div>
                <img
                  src="http://5.imimg.com/data5/ECOM/Default/2022/5/WC/KQ/DJ/65058394/h57e9e0bb16864122a7ccf68711edb724w-250x250.png"
                  alt=""
                />
                <p>5 In 1 Lipstick Combination Strip Matte</p>
                <h5>₹ 899</h5>
                <button>Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
    
    `;
}

export { bsorder };
