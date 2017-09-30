
var editor = "";
var editor2 = "";

$(document).ready(function() {
    
    require(["ace/ace"], function(ace) {
        
        var uneditable = ace.edit("uneditable");
        uneditable.setTheme("ace/theme/textmate");
        uneditable.session.setMode("ace/mode/javascript");
        uneditable.setReadOnly(true);
        uneditable.setOption("maxLines", 3);
        uneditable.setOption("minLines", 3);
        
        var output = ace.edit("output");
        output.renderer.setShowGutter(false);
        output.session.setMode("ace/mode/javascript");
        output.setReadOnly(true);
        output.setOption("maxLines", 1);
        output.setOption("minLines", 1);
        //output.editor.setShowPrintMargin(false); // ei näita rea numbreid
        
        
        editor = ace.edit("editor");
        editor.setTheme("ace/theme/textmate");
        editor.session.setMode("ace/mode/javascript");
        editor.setAutoScrollEditorIntoView(true);
        editor.setOption("maxLines", 50);
        editor.setOption("minLines", 5);
        
        var opView = $("#custText")[0]
        
        opView.addEventListener("change", function() {
           editor.setValue(opView.value);
        });
        
        editor.on('change', function() {
            opView.value = editor.getValue();
        });
        
        
        sm.getApi({version: 'v1'}).then(function(salemove) {
            if (salemove.isInEngagement()) {
                document.querySelector("#custText").classList.remove("hidden");
            }
            
            salemove.addEventListener(salemove.EVENTS.ENGAGEMENT_START, function(engagement) {
                document.querySelector(".sidebar.pure-u-1.pure-u-md-1-4").classList.add("engagement");
                document.querySelector("#custText").classList.remove("hidden");
            });
            
            salemove.addEventListener(salemove.EVENTS.ENGAGEMENT_END, function(engagement) {
                document.querySelector(".sidebar.pure-u-1.pure-u-md-1-4").classList.add("engagement");
                document.querySelector("#custText").classList.add("hidden");
            });
        });
        
        $("#runCode1").on("click", function() {
            
            //first testcase
            var test1 = editor.getValue() + "var ans1 = multiply(5,5);";
            var script = document.createElement('script');
            try {
              script.appendChild(document.createTextNode(test1));
              document.body.appendChild(script);
            } catch (e) {
            }
            
            //second testcase
            var test2 = editor.getValue() + "var ans2 = multiply(1,1);";
            var script = document.createElement('script');
            try {
              script.appendChild(document.createTextNode(test2));
              document.body.appendChild(script);
            } catch (e) {
            }
            
            //testing answers
            if(ans1 == 25 && ans2 == 1) {
                //$("#code1").css('background-color','green');
                $("#code1").html('<img src="img/check.png" style="width:32px; height:32px; vertical-align:middle"/><b>  Correct!</b>');
            }else {
                //$("#code1").css('background-color','red');
                $("#code1").html('<img src="img/cross.png" style="width:32px; height:32px; vertical-align:middle"/><b>  Incorrect! Please try again!</b>');
            }
            ans1 = "";
            ans2 = "";
        });
        
        //#######################################################################
        
        var uneditable2 = ace.edit("uneditable2");
        uneditable2.setTheme("ace/theme/textmate");
        uneditable2.session.setMode("ace/mode/javascript");
        uneditable2.setReadOnly(true);
        uneditable2.setOption("maxLines", 6);
        uneditable2.setOption("minLines", 6);
        
        var output2 = ace.edit("output2");
        output2.renderer.setShowGutter(false);
        output2.session.setMode("ace/mode/javascript");
        output2.setReadOnly(true);
        output2.setOption("maxLines", 1);
        output2.setOption("minLines", 1);
        //output.editor.setShowPrintMargin(false); // ei näita rea numbreid
        
        
        editor2 = ace.edit("editor2");
        editor2.setTheme("ace/theme/textmate");
        editor2.session.setMode("ace/mode/javascript");
        editor2.setAutoScrollEditorIntoView(true);
        editor2.setOption("maxLines", 50);
        editor2.setOption("minLines", 5);
        
        var opView2 = $("#custText2")[0]
        
        opView2.addEventListener("change", function() {
           editor2.setValue(opView2.value);
        });
        
        editor2.on('change', function() {
            opView2.value = editor2.getValue();
        });
        
        
        sm.getApi({version: 'v1'}).then(function(salemove) {
            if (salemove.isInEngagement()) {
                document.querySelector("#custText2").classList.remove("hidden");
            }
            
            salemove.addEventListener(salemove.EVENTS.ENGAGEMENT_START, function(engagement) {
                document.querySelector(".sidebar.pure-u-1.pure-u-md-1-4").classList.add("engagement");
                document.querySelector("#custText2").classList.remove("hidden");
            });
            
            salemove.addEventListener(salemove.EVENTS.ENGAGEMENT_END, function(engagement) {
                document.querySelector(".sidebar.pure-u-1.pure-u-md-1-4").classList.add("engagement");
                document.querySelector("#custText2").classList.add("hidden");
            });
        });
        
        
        
        
        $("#runCode2").on("click", function() {
            
            //first testcase
            var test1 = editor2.getValue() + "var ans3 = isEqual(2,2);";
            var script = document.createElement('script');
            try {
              script.appendChild(document.createTextNode(test1));
              document.body.appendChild(script);
            } catch (e) {
            }
            
            //second testcase
            var test2 = editor2.getValue() + "var ans4 = isEqual(2,4);";
            var script = document.createElement('script');
            try {
              script.appendChild(document.createTextNode(test2));
              document.body.appendChild(script);
            } catch (e) {
            }
            
            //testing answers
            if(ans3 == true && ans4 == false) {
                //$("#code2").css('background-color','green');
                $("#code2").html('<img src="img/check.png" style="width:32px; height:32px; vertical-align:middle"/><b>  Correct!</b>');
            }else {
                //$("#code2").css('background-color','red');
                $("#code2").html('<img src="img/cross.png" style="width:32px; height:32px; vertical-align:middle"/><b>  Incorrect! Please try again!</b>');
            }
            ans3 = "";
            ans4 = "";
        });
        
    });
    
});


$('select[name="selectname"]').change(function(){
    if ($(this).val() == "monokai"){
        editor.setTheme("ace/theme/monokai")
     }
     else if ($(this).val() == "merbivore"){
        editor.setTheme("ace/theme/merbivore")
     }
     else if ($(this).val() == "eclipse"){
        editor.setTheme("ace/theme/eclipse")
     }
     else if ($(this).val() == "textmate"){
        editor2.setTheme("ace/theme/textmate")
     }
});


$('select[name="selectname2"]').change(function(){
    if ($(this).val() == "monokai"){
        editor2.setTheme("ace/theme/monokai")
     }
     else if ($(this).val() == "merbivore"){
        editor2.setTheme("ace/theme/merbivore")
     }
     else if ($(this).val() == "eclipse"){
        editor2.setTheme("ace/theme/eclipse")
     }
     else if ($(this).val() == "textmate"){
        editor2.setTheme("ace/theme/textmate")
     }
});
