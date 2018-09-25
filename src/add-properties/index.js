export default class AddPropertiesComponent {
    constructor(onClick) {
        this.onClick = onClick;
        this.id = document.getElementById('add-property');
        this.propertyName = document.getElementById('property-name');
        this.value = document.getElementById('value');

        this.id.onclick = () => {
            const propertyName = this.propertyName.value;
            const value = this.value.value;

            this.onClick({ propertyName, value });
        };
    }
}
