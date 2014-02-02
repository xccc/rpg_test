$(document).ready(function(){
  $("#ip_list").click(function(){
    $("#iplist").toggle();
  });
});

$(document).ready(function(){
  $("#listb2").click(function(){
    $("#iplist").toggle();
  });
});

$(function() {
  $( "#host" ).draggable();
  $( "#droppable1" ).droppable({
    drop: function( event, ui ) {
      $( this )
        .addClass( "ui-state-highlight" )
        .find( "p" )
         .html( "Dropped 1 !" );
      }
   });
});

$(function() {
  $( "listb2" ).draggable();
  $( "#droppable2" ).droppable({
    drop: function( event, ui ) {
      $( this )
        .addClass( "ui-state-highlight" )
        .find( "p" )
         .html( "Dropped 2!" );
      }
   });
});

$(function() {
  $( "#listb2" ).draggable();
  $( "#droppable3" ).droppable({
    drop: function( event, ui ) {
      $( this )
        .addClass( "ui-state-highlight" )
        .find( "p" )
         .html( "Dropped 3!" );
      }
   });
});

$(function() {
  $( "#listb2" ).draggable();
  $( "#droppable4" ).droppable({
    drop: function( event, ui ) {
      $( this )
        .addClass( "ui-state-highlight" )
        .find( "p" )
         .html( "Dropped into 4!" );
      }
   });
});
