
//getting the input values
$("#SearchButton").on("click", function() {

    var SearchTerm = $("#SearchInput").val();

    console.log (SearchTerm);

    var NumberOfRecords = $("#RecordNumber").val();

    console.log (NumberOfRecords);

    var StartYear = $("#StartYear").val();

    console.log (StartYear);

    var EndYear = $("#EndYear").val();

    console.log (EndYear);
})


$("ClearButton").on("click", function() {
    
    $("#articles").empty();
})


