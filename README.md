# ShopCart

Final project for Alkemy's Javascript course. 

This Single Page Application was developed using Material UI, an open-source React component library.
For more information visit:
https://mui.com/material-ui/getting-started/

This SPA contains three components combined in the App component.

Products table contains a products array that are rendered inside a table (ProductsTable.jsx). This table allows the user to select items and add them to the shopping cart(ShoppingCart.jsx) using the button that displays an add shopping cart Icon. 
If an item has been added to the shopping cart and the user selects a new item without unchecking the first one, the shopping cart now contains 2 units of the first Item and one unit of the second one. 
In order to only add one item the user must uncheck items in order no to put it in when a new selection has been done. 

A second table is displayed simultaneously when the add item button is pressed. This table shows the user the products contained in the shopping Cart, its number and partial amount. At the end of this table the total amount is displayed.