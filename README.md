What is this?
=============

This is a simple and easy way to create html based quotes for clients.
It is built only for web developers who want a cooler way to create a
quote.

How's it work?
---------------
Create a new quote:

    rake new_quote["client name"]

This will create `client-name/index.html.haml` in your `views/quotes`
directory.
   
Open file in text editor and start creating your quote.

Using haml/html, you can type anywhere...it's basically unstuctured.

If you want to create a line item, you can do so using the correct
structure or use the view helper.

    # I'm using haml, but it can easily be changed
    
    .row
      %h3 Option Number One
      %p Take 5 hrs and add new features and spruce up design.
    .row
      .item Web Design
      .description 
        %ul
          %li Add reply comment feature
          %li Add printing page
          %li Modify design (biggest change for the time)
      .units 5hrs
      .unit_price 
      .total total
    .spacer

Or the view helper:
    
    # Options
    # =line_item("item", "Description", units, :unit_price => 100, :spacer => true, :subtotal => true)

    =line_item("Web Design", "Place Description here...", 5)
    =line_item("Web Design", "Place Description here...", "5 hrs.")
    =line_item("Web Design", "Place Description here...", "5-8h", :spacer => true, :subtotal => true)

The last hash items are optional.  The unit price is optional (you can
setup the default unit price in the top of the main file).
    
Totals & Subtotals
-------------------------
Line item totals will be automatically calculated.

A grand total will automatically be calculated at the end of your document
unless you comment it out:
    
    =render "partials/total"

Total units will be calculated too.  You can also enter a range of units
(8-10hrs) and it'll take the average of the 2 numbers (must be together
and separated by a hyphen).
  
If you include a subtotal, a subtotal will be calculated for all items
above the subtotal until a spacer or another subtotal is reached.

More
-------------------------
Checkout the views/index.html.haml for more samples.


Deploying
--------------------------
Coming Soon...
