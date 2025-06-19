{
    'name': 'Hide Recall Button in POS Preparation Display',
    'version': '1.0',
    'category': 'Point of Sale',
    'depends': ['point_of_sale', 'pos_preparation_display'],
    'assets': {
        'point_of_sale.assets': [
            'pos_recall_btn/static/src/css/hide_recall_button.css',
        ],
    },
    'installable': True,
    'application': False
}
# This module hides the recall button in the POS preparation display.
