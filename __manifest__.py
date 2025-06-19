{
    'name': 'Hide Recall Button in POS Preparation Display',
    'version': '1.0',
    'category': 'Point of Sale',
    'depends': ['point_of_sale', 'pos_preparation_display'],
    'assets': {
        'point_of_sale.assets': [
            'custom_pos_hide_recall_button/static/src/js/remove_recall_btn.js',
        ],
    },
    'installable': True,
    'application': False
}
