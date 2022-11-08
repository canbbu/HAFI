
        let dumbbell = document.getElementById('dumbbell');
        let protein = document.getElementById('protein');
        let product = document.getElementById('product');
        let login = document.getElementById('login');

        dumbbell.onclick = function () {
            window.location.href = '/newProject/new_main.html';
        };

        protein.onclick = function () {
            window.location.href = '/newProject/protein.html';
        };

        product.onclick = function () {
            window.location.href = '/newProject/product.html';
        };


       
        
        // search.onclick = function () {
        
        //     if (body.className =='blur') {
        //         body.style.display = 'none';
        //         body.setAttribute('class', null);
        //     } else {
        //         body.style.display = 'block';
        //     body.setAttribute('class', 'blur');
        //     }
        // };
        
        let search = document.getElementById('search');
        let body = document.getElementsByTagName('body');
        let navMenu = document.getElementsByClassName('nav-menu');


       search.addEventListener('click', () => {
        navMenu.slideToggle();
        $('.blur-body').toggleClass('blur');   
       
     });
        
        
        let cartItems = document.querySelector('.cart-items')
        let allProducts = [
            { id: 1, title: 'YOGA-MAT', price: 15000, img: 'product_img/yogaMat.png', count: 1 },
            { id: 2, title: 'YOGA-PAD', price: 20000, img: 'product_img/yogaPad.png', count: 1 },
            { id: 3, title: 'YOGA-BLOCK', price: 30000, img: 'product_img/yogaBlock.png', count: 1 },
            { id: 4, title: 'STRETCH-STRAP', price: 40000, img: 'product_img/stretchStrap.png', count: 1 },
            { id: 5, title: 'LEGGINGS', price: 20000, img: 'product_img/leggings.png', count: 1 },
            { id: 6, title: 'TOWEL', price: 33000, img: 'product_img/towel.png', count: 1 },
            { id: 7, title: 'MASK', price: 24000, img: 'product_img/mask.png', count: 1 },
            { id: 8, title: 'GLOVE', price: 23000, img: 'product_img/glove.png', count: 1 },
        ]
        let bascketProducts = []
        let $ = document
        const shopItemsContainer = $.querySelector('.shop-items')
        let cartTotalPrice = document.querySelector('.cart-total-price')
        

        allProducts.forEach(function (product) {
            let productContainer = $.createElement('div')
            productContainer.classList.add('shop-item')
            productContainer.classList.add('font-1')

            let productTitleSpan = $.createElement('span')
            productTitleSpan.classList.add('shop-item-title')
            productTitleSpan.innerHTML = product.title

            let productImageElem = $.createElement('img')
            productImageElem.classList.add('shop-item-image')
            productImageElem.setAttribute('src', product.img)

            let productDetailsContainer = $.createElement('div')
            productDetailsContainer.classList.add('shop-item-details')

            let productPriceSpan = $.createElement('span')
            productPriceSpan.innerHTML = product.price
            productPriceSpan.classList.add('shop-item-price')

            let prodcutAddButton = $.createElement('button')
            prodcutAddButton.innerHTML = 'ADD TO CART'
            prodcutAddButton.className = 'btn btn-primary shop-item-button'
            prodcutAddButton.addEventListener('click', function () {
                addProductToArray(product.id, bascketProducts)  

            })
            
          


            productDetailsContainer.append(productPriceSpan, prodcutAddButton)

            productContainer.append(productTitleSpan, productImageElem, productDetailsContainer)

            shopItemsContainer.append(productContainer)



        })

       
       
        

        //basket input function
        function addProductToArray(productId, bascketProducts) {
            var findProduct = allProducts.find(function (product) {
                return product.id === productId
            })
            if (bascketProducts.includes(findProduct)) {
                ++findProduct.count

            } else {
                bascketProducts.push(findProduct)
            }

            showBascket(bascketProducts)
            setLocalStorage(bascketProducts)


        }
        function showBascket(bascketProducts) {
            // console.log(bascketProducts)
            cartItems.innerHTML = ''
            bascketProducts.forEach(function (product) {
                let cartRow = document.createElement('div')
                cartRow.classList.add('cart-row')

                let cartItem = document.createElement('div')
                cartItem.className = 'cart-item cart-column'

                let image = document.createElement('img')
                image.className = 'cart-item-image'
                image.src = product.img
                image.height = '100'
                image.width = '100'

                let cartTitle = document.createElement('span')
                cartTitle.className = 'cart-item-title'
                cartTitle.innerText = product.title

                let cartPrice = document.createElement('span')
                cartPrice.className = 'cart-price cart-column'
                cartPrice.innerText = product.price

                let cartQuantity = document.createElement('div')
                cartQuantity.className = 'cart-quantity cart-column'

                let inputElem = document.createElement('input')
                inputElem.className = 'cart-quantity-input'
                inputElem.value = product.count
                inputElem.type = 'number'

                inputElem.addEventListener('change', function () {
                    changeValue(product.id, inputElem.value)
                    setLocalStorage(bascketProducts)
                })

                let btnRemove = document.createElement('button')
                btnRemove.className = 'btn btn-danger'
                btnRemove.type = 'button'
                btnRemove.innerText = 'REMOVE'


                btnRemove.addEventListener('click', function () {
                    removeFromBascket(product.id, product)

                })

                cartItem.append(image, cartTitle)
                cartQuantity.append(inputElem, btnRemove)
                cartRow.append(cartItem, cartPrice, cartQuantity)
                cartItems.append(cartRow)

            })
            showTotalPrice(bascketProducts)
            setLocalStorage(bascketProducts)
            //bascketProducts = []
        }
        function removeFromBascket(productId, product) {

            bascketProducts = bascketProducts.filter(function (product) {
                return productId !== product.id

            })

            showBascket(bascketProducts)
            showTotalPrice(bascketProducts)
            product.count = 1

        }
        function showTotalPrice(bascketProducts) {

            let totalPrice = 0
            if (bascketProducts.length == 0) {
                cartTotalPrice.innerText = '0$'
            }
            bascketProducts.forEach(function (product) {
                totalPrice += product.price * product.count
                cartTotalPrice.innerText = totalPrice
            })


        }
        function changeValue(productId, newCount) {
            bascketProducts.forEach(function (product) {
                if (productId == product.id) {
                    product.count = newCount
                }
            })
            showTotalPrice(bascketProducts)
        }
        function setLocalStorage(bascketProducts) {
            localStorage.setItem('Basckets', JSON.stringify(bascketProducts))
            bascketProducts = JSON.parse(localStorage.getItem('Basckets'))
        }
        window.addEventListener('load', function () {
            if (JSON.parse(localStorage.getItem('Basckets'))) {
                bascketProducts = JSON.parse(localStorage.getItem('Basckets'))
                showBascket(bascketProducts)
            } else {
                bascketProducts = []
            }
        })

          // search and fade
         

        //search bar filter


        //   const list = document.getElementById('list');

        //   function showList(val = '') {
        //       list.innerHTML = '';
        //       const res = allProducts.forEach(product => {
        //           if (product.name.includes(val)) {
        //               const li = document.createElement('li');
        //               li.innerHTML = `
        //                   <img src='${product.url}' alt='${product.name}'>
        //                   <p>title: ${product.name}</p>
        //                   <p>type: ${product.type}</p>
        //                   <p>price: ${product.price}</p>
                          
        //                   `
          
        //               list.appendChild(li);
        //           }
        //       })
        //   }

          
        //     const searchBtn = document.getElementById('btn');

        //     searchBtn.addEventListener('click', (e) => {
        //         e.preventDefault();
        //         const val = search.value;
        //         console.log(val);
        //         showList(val);
        //     })


