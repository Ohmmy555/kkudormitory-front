<template>
    <div>
        <h1 class="head"> Admin</h1>
        <div class="container">
            <div class="img-container">
            <img src="data:image/png;base64,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" class="" />
            </div>
            <table class="table-responsive bordered highlight centered hoverable z-depth-2">
                <thead>
                    <tr>
                        <th v-for="column in columns">
                            <!-- {{ column }} -->
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <!-- <td>{{ index }}</td> -->
                        <td>
                            <!-- {{ person.lname }} -->
                        </td>
                        <td>
                            <!-- {{ person.fname }} -->
                        </td>
                        <td>
                            <!-- {{ person.age }} years -->
                        </td>
                        <td>
                            <!-- {{ person.job }} -->
                        </td>
                        <td>
                            <!-- {{ person.address }} -->
                        </td>
                        <td style="width: 18%;">
                            <a href="#modal" @click="" class="btn waves-effect waves-light yellow darken-2"><i
                                    class="material-icons">edit</i>
                            </a>
                            <a href="#!" class="btn waves-effect waves-light red darken-2" @click=""><i
                                    class="material-icons">archive</i>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <div class="input-field">
                                <input placeholder="Placeholder" type="text">
                                <label>Last Name</label>
                            </div>
                        </td>
                        <td>
                            <div class="input-field">
                                <input placeholder="Placeholder" type="text">
                                <label>First Name</label>
                            </div>
                        </td>
                        <td>
                            <div class="input-field">
                                <input placeholder="Placeholder" type="text">
                                <label>Age</label>
                            </div>
                        </td>
                        <td>
                            <div class="input-field">
                                <input placeholder="Placeholder" type="text">
                                <label>Job</label>
                            </div>
                        </td>
                        <td>
                            <div class="input-field">
                                <input placeholder="Placeholder" type="text">
                                <label>Address</label>
                            </div>
                        </td>
                        <td><a href="#!" class="btn btn-waves green darken-2"><i class="material-icons">add</i></a></td>
                    </tr>
                </tbody>
            </table>

            <table class="table-responsive centered bordered striped highlight z-depth-1 hoverable">
                <thead>
                    <tr>
                        <th v-for="column in columns">
                            <!-- {{ column }} -->
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <!-- <td>{{ index }}</td> -->
                        <td>
                            <!-- {{ person.lname }} -->
                        </td>
                        <td>
                            <!-- {{ person.fname }} -->
                        </td>
                        <td>
                            <!-- {{ person.age }} years -->
                        </td>
                        <td>
                            <!-- {{ person.job }} -->
                        </td>
                        <td>
                            <!-- {{ person.address }} -->
                        </td>
                        <td>
                            <a href="#!" class="btn waves-effect waves-light blue darken-2"><i
                                    class="material-icons">restore</i>
                            </a>
                            <a href="#!" class="btn waves-effect waves-light red darken-2"><i
                                    class="material-icons">delete</i>
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div id="modal" class="modal modal-fixed-footer">
            <div class="modal-content">
                <h4 class="center-align">Edit</h4>
                <p class="center-align">Edition form. Update informations</p>
                <div class="row">
                    <form class="col s12">
                        <div class="row">
                            <div class="input-field col s6">
                                <input placeholder="John" type="text">
                                <label>Last Name</label>
                            </div>
                            <div class="input-field col s6">
                                <input placeholder="Doe" type="text">
                                <label>First Name</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s6">
                                <input placeholder="26" type="text">
                                <label>Age</label>
                            </div>
                            <div class="input-field col s6">
                                <input placeholder="Teacher" type="text">
                                <label>Job</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input placeholder="Address" type="text">
                                <label>First Name</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="modal-footer">
                <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
                <a href="#!" class="btn waves-effect waves-light"><i class="material-icons">edit</i></a>
            </div>
        </div>
    </div>
</template>

<script>
// export default {
//     name: "AdminPage",
//     data() {
//         return {
//             property: "value",
//             zones: [
//                 {
//                     name: "dummy",
//                     items: [],
//                 },
//             ],
//         };
//     },
//     created() {
//         this.callAPI();
//     },
//     methods: {
//         async callAPI() {
//             this.zones = await this.$kkudormAPI.getAll();
//         },
//         //function to add data to table
//         add: function () {
//             this.persons.push({
//                 lname: this.input.lname,
//                 fname: this.input.fname,
//                 age: this.input.age,
//                 job: this.input.job,
//                 address: this.input.address
//             });

//             for (var key in this.input) {
//                 this.input[key] = '';
//             }
//             this.persons.sort(ordonner);
//             this.$refs.lname.focus();
//         },
//         //function to handle data edition
//         edit: function (index) {
//             this.editInput = this.persons[index];
//             console.log(this.editInput);
//             this.persons.splice(index, 1);
//         },
//         //function to send data to bin
//         archive: function (index) {
//             this.bin.push(this.persons[index]);
//             this.persons.splice(index, 1);
//             this.bin.sort(ordonner);
//         },
//         //function to restore data
//         restore: function (index) {
//             this.persons.push(this.bin[index]);
//             this.bin.splice(index, 1);
//             this.bin.sort(ordonner);
//         },
//         //function to update data
//         update: function () {
//             // this.persons.push(this.editInput);
//             this.persons.push({
//                 lname: this.editInput.lname,
//                 fname: this.editInput.fname,
//                 age: this.editInput.age,
//                 job: this.editInput.job,
//                 address: this.editInput.address
//             });
//             for (var key in this.editInput) {
//                 this.editInput[key] = '';
//             }
//             this.persons.sort(ordonner);
//         },
//         //function to defintely delete data
//         deplete: function (index) {
//             // console.log(this.bin[index]);
//             this.bin.splice(index, 1);
//         }
//     },
// };
// //function to sort table data alphabetically
// var ordonner = function (a, b) {
//     return (a.lname > b.lname);
// };

// (function () {
//     //initialize modal box with jquery
//     $('.modal').modal();
// });

</script>
<style>
body {
    background: skyblue;
    background-blend-mode: screen;
}

div:first-child{
  margin: 20px 0;
}  
  table:first-of-type{
    margin: 15px 2px;
    background: #ffffff !important;
  }
  table:last-of-type{
     margin: 15px 2px;
    background: #fdfdef !important;
  }
  .head{
    text-align: center;
    margin: 45px 35px;
  }
  .img-container{
     text-align: center;
  }
</style>
  