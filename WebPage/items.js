$( document ).ready(function() {
    $("#addItems").on("click", function() {
        changeArrow($(this), "#items-section");
    });

    $(".category").on("click", function(){
    	changeArrow($(this), ".item-list");
    });

    $(".item").on("click", function(){
    	var num = $(this).text().split(' ')[1];
        $("#name").val($(this).text());
        $("#description").val("Description" + num);
        $("#examples").val("Example" + num);
        $("#category").val("Category " + (num % 3 + 1));
        changeSubcategories($("#category"), $("#subcategory"));
        $("#snapEligible").prop("checked", true);

        $("#makeChanges").val("Edit Item");
        $("#searchAddEdit").text("Edit");
        $("#clearSelection").show();
    });

    $("#clearSelection").on("click", function(){
    	$("#name").val("");
        $("#description").val("");
        $("#examples").val("");
        $("#category").val("Select");
        changeSubcategories($("#category"), $("#subcategory"));
        $("#needsLicense").prop("checked", false);
        $("#temperatureControl").prop("checked", false);
        $("#snapEligible").prop("checked", false);
        $("#needsTested").prop("checked", false);

        $("#makeChanges").val("Add Item");
        $("#searchAddEdit").text("Add");
        $("#clearSelection").hide();
    });

    $("#search").on("click", function(){
    	changeArrow($("#search"), "form");
    });

    $("#category").on("change", function(){
    	changeSubcategories($(this), $("#subcategory"));
    });

    $("#searchCategory").on("change", function(){
    	changeSubcategories($(this), $("#searchSubcategory"));
    });

    $("#addExample").on("click", function(){
    	$('<div/>').addClass('new-example')
        .html($('<input type="text" class="examples"/>'))
    	.append($('<span/>').addClass('remove-example').text(' - Remove Example '))
    	.insertBefore(this);
    	$(".remove-example").on('click', function() {
    		$(this).closest('.new-example').remove();
    	});
    });

    $("#editCategory").on("change", function(){
        if ($(this).val() == "New Category"){
            $("#catname").val("");
            $("#addCategory").val("Add Category");
        }
        else {
            $("#catname").val($(this).val())
            $("#addCategory").val("Edit Category");
        }
    });

    $("#searchCategory").on("change", function(){
        changeSubcategories($(this), $("#searchSubcategory"));
        $("#subname").val("");
        $("#addSubcategory").val("Add Category");
    });

    $("#searchSubcategory").on("change", function(){
        var $selected = $("#searchSubcategory option:selected");
        if ($selected.text() == "New Sub-Category"){
            $("#subname").val("");
            $("#addSubcategory").val("Add Category");
        }
        else {
            $("#subname").val($selected.text())
            $("#addSubcategory").val("Edit Category");
        }
    });

    $("#addCategories").on("click", function() {
        changeArrow($(this), "#category-form");
    });

    $("#addSubcategories").on("click", function() {
        changeArrow($(this), "#subcategory-form");
    });

    function changeArrow(obj, toggleArea){
        var rightArrow = "▷";
        var downArrow = "▽";
        
    	var $arrow = obj.find("span");
    	if ($arrow.text() === rightArrow)
    		$arrow.text(downArrow)
    	else 
    		$arrow.text(rightArrow);

        obj.parent().find(toggleArea).toggle();
    }

    function changeSubcategories($category, $subcategories) {
    	if ($category.val() != "Select"){
    		$subcategories.prop("disabled", false);
    		$subcategories.find("option").remove().end();
    		if ($category.val() == "Category 1"){
    			$subcategories.append($('<option>', {value: "0", text: "Not a Sub-Category"}));
    			$subcategories.append($('<option>', {value: "1", text: "Sub-Category 1"}));
    			$subcategories.append($('<option>', {value: "2", text: "Sub-Category 2"}));
    		}
    		else if ($category.val() == "Category 2"){
    			$subcategories.append($('<option>', {value: "0", text: "Not a Sub-Category"}));
    			$subcategories.append($('<option>', {value: "3", text: "Sub-Category 3"}));
    			$subcategories.append($('<option>', {value: "4", text: "Sub-Category 4"}));
    		}
    		else {
    			$subcategories.append($('<option>', {value: "0", text: "Not a Sub-Category"}));
    		}

    	}
    	else{
    		$subcategories.prop("disabled", true);
    		$subcategories.find("option").remove().end();
    		$subcategories.append($('<option>', {value: "0", text: "Select a Category"}));
    	}
    }

    function OnUserClickAddItem()
    {
        let name = document.getElementById( "name" );
        let description = document.getElementById( "description" );
        let example = document.getElementById( "examples" );
        let needsLicense = document.getElementById( "needsLicense" );
        let needsTemperatureControl = document.getElementById( "needsTemperatureControl" );
        let temperatureControl = document.getElementById( "temperatureControl" );
        let snapEligiable = document.getElementById( "snapEligable" );
        let needsTested = document.getElementById(" needsTested");

        addFoodItemToDictionary( name.textContent, description.textContent, example.textContent,
                                needsLicense.checked, needsTemperatureControl.checked, temperatureControl.checked,
                                snapEligiable.checked, needsTested.checked );
    }

    function OnUserClickAddCategory()
    {
        let categoryName = document.getElementById("CategoryName");
        let categoryType = document.getElementById("Type");
        addCategory(categoryName.textContent, categoryType.textContent, null);

    }
});