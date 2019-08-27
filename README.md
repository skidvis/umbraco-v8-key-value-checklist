# umbraco v8 Key/Value checklist
Key/Value-based checklist for Umbraco 8



### Summary:

Adds a new Propery Editor which allows you to enter key/value pairs to be listed in a checklist. 



### Instructions:

* Copy the KeyValueCheckList folder into you Umbraco's App_Plugins folder.
* Restart Umbraco.
* Create a new Data Type and select Key:Value CheckList as the Property Editor.
* Give it a name and enter the key/value mappings for the checklist in the textbox provided. 
* Save and add your new Data Type to your Document Type of choice.



### Details:

* The key/values must be entered in the following format: key:value, and on their own lines.

  * Examples: 
    * 0:Select One
    * vmg:Video Game Music
    * ninja: Ninja's Only

* The key will be stored in your published content, so you'll have to do a lookup in order to reference the text value on your pages.

  
#### Credit:
This is code based on an [Umbraco forum post by Ian Granger.](https://our.umbraco.com/forum/umbraco-7/using-umbraco-7/64690-Simple-package-not-available-TextValue-Dropdown-List)

This has been tested on Umbraco v8.1.x, but it should work on older versions as well. 

Pull Requests welcomed.
