
$('#autofill-table_client_name').DataTable( {
    keys: false,
    lengthChange: false,
    autoFill: false,
    "info": false,
    paginate: false,
} );

$('#autofill-table_client_tel').DataTable( {
    keys: false,
    lengthChange: false,
    autoFill: false,
    "info": false,
    paginate: false,
} );
$('#autofill-table_client_no').DataTable( {
    keys: false,
    lengthChange: false,
    autoFill: false,
    "info": false,
    paginate: false,
} );
$('#autofill-table_horse_no').DataTable( {
    keys: false,
    lengthChange: false,
    autoFill: false,
    "info": false,
    paginate: false,
} );
$('#autofill-table_chlint_access').DataTable( {
    keys: false,
    lengthChange: false,
    autoFill: false,
    "info": false,
    paginate: false,
} );




















$('#hor-autofill').DataTable( {
    autoFill: {
        horizontal: false
    }
} );

$('#enable-autofill').DataTable( {
    autoFill: {
        enable: false
    },
    dom: 'Bfrtip',
    buttons: [
        {
            text: "Enable AutoFill",
            action: function (e, dt) {
                if ( dt.autoFill().enabled() ) {
                    this.autoFill().disable();
                    this.text( 'Enable AutoFill' );
                }
                else {
                    this.autoFill().enable();
                    this.text( 'Disable AutoFill' );
                }
            }
        }
    ]
} );

$('#key-table').DataTable( {
    keys: false,
    autoFill: false
} );

//______Select2 
$('.select2').select2({
    minimumResultsForSearch: Infinity
});