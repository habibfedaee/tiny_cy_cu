Feature: DemoBlaze App Full

@positive_login @full
Scenario: positive user Register and Login
Given i navigate to demoblaze and Register section
When i type login credentials
And i click login button
Then i should be in home page


# @addItems @full
# you can added single item each time, then return to home to add more
# or go to cart for placing order
# Scenario: add two items into cart and check cart if exists
# Given i need to add items into cart
# When i click the item title
# And i click add button
# Then item is added

@addItem @singleItem
Scenario: adding single item to cart
Given add single item to the cart
When i navigate and login to the demoblaze app 
And i select item by product title from homepage
And i click addToCart button
And i navigate to the cart page
Then my added item should appear in cart

@addItems @multipleItems
Scenario: adding multiple items to cart
Given add multiple items to the cart
When i navigate and login to the demoblaze app 
And i select and add each item to the cart
Then my added items should appear in cart


@checkOut @singleItem
Scenario: checkout single item
Given i have added single item to the cart
When i navigate and login to the demoblaze app 
And i select item by product title from homepage
And i click checkOut button in cartpage
And i fill the checkout form
And i click continue button and click finish button
Then my order should be placed