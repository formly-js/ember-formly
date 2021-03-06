import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const form = this.get('store').createRecord('form', {
      email: 'my@email.com',
      password: 's3cre7',
      checked: true,
      slider: 4,
      color: '#0000ff',
      date: '',
      chooseone: 'c',
      choosemany: ['x', 'z'],
      optionaltext: { active:true, text:'Ok' },
      nested: {
        foo: 'bar',
        meep: { active:true, text:'Ok' }
      },
      group: {
        foo: 'oof',
        bar: 'rab'
      }
    });
    // Equivalent
    //form.set('nested', this.get('store').createFragment('objFragment', {
      //foo: 'bar',
      //meep: { active:true, text:'Ok' }
    //}));

    return form;
  },

  setupController(controller/**, model**/) {
    this._super(...arguments);

    const fields = [
      {
        key: 'email',
        component: 'ember-formly-fields/html-input',
        options: {
          type: 'email',
          label: 'Email address',
          placeholder: 'Enter email'
        }
      },
      {
        key: 'password',
        component: 'ember-formly-fields/html-input',
        options: {
          type: 'password',
          label: 'Password',
          placeholder: 'Password'
        }
      },
      {
        key: 'checked',
        component: 'ember-formly-fields/html-input',
        options: {
          type: 'checkbox',
          label: 'Check me out'
        }
      },
      {
        key: 'slider',
        component: 'ember-formly-fields/html-input',
        options: {
          type: 'range',
          label: 'Slide me out',
          min: 1,
          max: 5
        }
      },
      {
        key: 'color',
        component: 'ember-formly-fields/html-input',
        options: {
          type: 'color',
          label: 'Pick a color!'
        }
      },
      {
        key: 'date',
        component: 'date-picker',
        options: {
          label: 'Pick a date!',
          callback: function(value) {
            window.alert('Selected date: ' + value);
          }
        }
      },
      {
        key: 'chooseone',
        component: 'radios-inputs',
        options: {
          label: 'Chose one (radios)',
          inputs: [
            {key: 'a', label: 'Option A'},
            {key: 'b', label: 'Option B'},
            {key: 'c', label: 'Option C'}
          ]
        }
      },
      {
        key: 'chooseone',
        component: 'dropdown-inputs',
        options: {
          label: 'Chose one (dropdown)',
          options: [
            {value: 'a', label: 'Option A'},
            {value: 'b', label: 'Option B'},
            {value: 'c', label: 'Option C'}
          ]
        }
      },
      {
        key: 'choosemany',
        component: 'checkboxes-inputs',
        options: {
          label: 'Chose many (checkboxes)',
          inputs: [
            {key: 'w', label: 'Option W'},
            {key: 'x', label: 'Option X'},
            {key: 'y', label: 'Option Y'},
            {key: 'z', label: 'Option Z'}
          ]
        }
      },
      {
        key: 'optionaltext',
        component: 'three-state-textbox',
        options: {
          label: 'Optional text (three-state-textbox)'
        }
      }
    ];

    const nestedFields = [
      {
        key: 'foo',
        component: 'ember-formly-fields/html-input',
        options: {
          type: 'text',
          label: 'Foo',
          placeholder: 'Enter foo'
        }
      },
      {
        key: 'meep',
        component: 'three-state-textbox',
        options: {
          label: 'Meep (nested fragment)'
        }
      }
    ];

    const fieldGroup = [
      {
        key: 'group',
        component: 'field-group',
        options: {
          title: 'Group Title',
          fields: [
            {
              key: 'foo',
              component: 'ember-formly-fields/html-input',
              options: {
                type: 'text',
                label: 'Foo',
                placeholder: 'Enter foo'
              }
            },
            {
              key: 'bar',
              component: 'ember-formly-fields/html-input',
              options: {
                type: 'text',
                label: 'Bar',
                placeholder: 'Enter bar'
              }
            }
          ]
        }
      }
    ];

    controller.set('fields', fields);
    controller.set('nestedFields', nestedFields);
    controller.set('fieldGroup', fieldGroup);
  }
});
