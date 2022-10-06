const mixins = {
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },
    formatdate(value) {
      let monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
      let date = new Date(value);
      let year = date.getFullYear();
      let month = date.getMonth();
      let dt = date.getDate();

      if (dt < 10) {
        dt = '0' + dt;
      }
      return dt + ' ' + monthNames[month] + ' ' + year
    },
    textCapitalize(str) {
      var splitStr = str.toLowerCase().split(' ');
      for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
      }
      // Directly return the joined string
      return splitStr.join(' ');
    }
  }
}
export default mixins