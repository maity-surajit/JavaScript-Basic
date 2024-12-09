let laptop = {
    cpu: 'i9',
    ram: 16,
    config: function() {
        console.log(this.cpu)
    }
}

laptop.config()