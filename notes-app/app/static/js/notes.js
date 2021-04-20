//Gerar Nota de Fechamento Atendimento de Chamado
function GenerateNFAC(){
    var causa = document.getElementById("CAC").value;
    var canal = document.getElementById("CAAC").value;
    var solucao = document.getElementById("SAC").value;
    var msg = "Causa: "+causa+"\nCanal de Atendimento: "+canal+"\nSolução: "+solucao+"\nEm casos de dúvidas, favor entrar em contato com o Help Desk no Ramal 3911/08007284855"
    var script = msg;
    document.getElementById("NFAC").value = script;
}
function CopyNFAC(){
    $("#NFAC").select();
    document.execCommand("copy");
}
