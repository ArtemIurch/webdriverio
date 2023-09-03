import { expect as chai_expect } from 'chai';
//const { baseUrl } = require('wdio.conf.js');


describe('My Login application', () => {

    it.only('Perform Login', async () => {
      await browser.url("/");        
        // выполняю логин на страницу
         await $('#user-name').addValue("standard_user")
         await $('#password').addValue("secret_sauce")
         await $('#login-button').click()

   
         await expect($("//span[text()='Products']")).toBeDisplayed() // проверяем наличие тайтла Products
         await expect($('#shopping_cart_container')).toBeDisplayed()  // проверяем наличие иконки Cart


             // проверяем что количество айтэмов больше 1

          chai_expect((await $$("//div[@class='inventory_list'] /div")).length).to.be.above(1);
           
            })

    it("Add product to the cart", async ()=>{
        await browser.url(`/`)


        // выполняю логин на страницу
        await $('#user-name').addValue("standard_user")
        await $('#password').addValue("secret_sauce")
        await $('#login-button').click()


        //Add the first product to the cart by clicking Add to Cart button
        await $('#add-to-cart-sauce-labs-backpack').click()


        //Verify Shopping Cart icon contains the number of products added (equal 1)
        await $("//span[@class='shopping_cart_badge'][text()='1']")
        let a = await $("//span[@class='shopping_cart_badge']").getText()
        console.log(a + " ОДИНННННН")
        chai_expect(+a).to.equal(1); 


        // берем всю дату с айтема (тайтл, описание, цена)
         const text = await $("div.inventory_item_name").getText();
         const text1 = await $("div.inventory_item_desc").getText();
         const text2 = await $("div.inventory_item_price").getText();


         // нажимаем на иконку корзины
         await $("//a[@class='shopping_cart_link']").click()


        //  Open the Shopping Cart and verify the added product is displayed (the data should be taken from the Products page and used here to as an expected result)
        //  тут будем получать и сравнивать дату


         const text3 = await $("div.inventory_item_name").getText(); // берем тайтл с корзины
         chai_expect(text).to.equal(text3);  // сравниваем два тайтла
     

          const text4 = await $("div.inventory_item_desc").getText(); // берем описание с корзины
          chai_expect(text1).to.equal(text4);
       
          const text5 = await $("div.inventory_item_price").getText(); // берем цену с корзины
          chai_expect(text2).to.equal(text5);

        //     Remove the product by clicking Remove
          
          await $('#remove-sauce-labs-backpack').click()

        //   6 Verify no products are available in the Shopping Cart
        // ищем кнопку удаление + проверяем существует ли она. 
        
        await expect("//button[@id='remove-sauce-labs-backpack']").not.toBeDisplayed()
       
       

    }


    )


})



