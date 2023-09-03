import { expect as chai_expect } from 'chai';



describe('My Login application', () => {
    it("Add product to the cart", async ()=>{
        await browser.url(`https://www.saucedemo.com`)


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
        //expect(2).to.equal(2); 


        // берем всю дату с айтема (тайтл, описание, цена)
        const text = await $("div.inventory_item_name").getText();
        const text1 = await $("div.inventory_item_desc").getText();
        const text2 = await $("div.inventory_item_price").getText();


        // нажимаем на иконку корзины
        await $("//a[@class='shopping_cart_link']").click()


        // Open the Shopping Cart and verify the added product is displayed (the data should be taken from the Products page and used here to as an expected result)
        ////// тут будем получать и сравнивать дату


        const text3 = await $("div.inventory_item_name").getText(); // берем тайтл с корзины


       
        if (text === text3) { // сравниваем два тайтла
            console.log("Тексты идентичны.");
          } else {
            console.log("Тексты не идентичны.");
          }


         const text4 = await $("div.inventory_item_desc").getText(); // берем описание с корзины
       
         if (text1 === text4) {  // сравниваем два описания
            console.log("Тексты идентичны.");
          } else {
            console.log("Тексты не идентичны.");
          }
       
         const text5 = await $("div.inventory_item_price").getText(); // берем цену с корзины


         if (text2 === text5) { // сравниваем две цены
            console.log("Тексты идентичны.");
          } else {
            console.log("Тексты не идентичны.");
          }




         //   Remove the product by clicking Remove
          await $('#remove-sauce-labs-backpack').click()




     
          // 6 Verify no products are available in the Shopping Cart
          // ищем кнопку удаление + проверяем существует ли она. Записываем результат поиска в переменную


            let element= await $('#remove-sauce-labs-backpack').isExisting();
       


            if (element == false){
                console.log("Кнопки нет.");
            }
            else{
                console.log("Кнопка есть.");
            }


    }


    )


})



