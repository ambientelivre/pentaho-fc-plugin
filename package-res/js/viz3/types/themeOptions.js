define(function() {
    
    return ["string", function(PenString) {

        return PenString.extend({
        $type: {
            mixins: ["enum"],
            domain: [
                {v: "none", f: "None"},
                {v: "fint", f: "Fint"},
                {v: "zune", f: "Zune"},
                {v: "ocean", f: "Ocean"},
                {v: "carbon", f: "Carbon"}
            ]
        }
        });
    }];
});