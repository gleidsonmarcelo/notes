//Gerar Nota de Fechamento Atendimento de Chamado
function GenerateNFAC() {
    var causa = document.getElementById("CAC").value;
    var canal = document.getElementById("CAAC").value;
    var solucao = document.getElementById("SAC").value;
    var msg = "Causa: " + causa + "\nCanal de Atendimento: " + canal + "\nSolução: " + solucao + "\nEm casos de dúvidas, favor entrar em contato com o Help Desk no Ramal 3911/08007284855"
    var script = msg;
    document.getElementById("NFAC").value = script;
}
//Copiar Nota de Fechamento Atendimento de Chamado
function CopyNFAC() {
    $("#NFAC").select();
    document.execCommand("copy");
}
//Configuração Datetimepicker Contato Improdutivo
$("#DT1").datetimepicker({
    format: "dd/mm/yyyy",
    language: "pt-BR",
    todayHighlight: true,
    minView: 2,
    maxView: 3,
    forceParse: true,
    todayBtn: true,
    keyboardNavigation: true,
    autoclose: true
});
//Gerar Nota de Pendência Contato Improdutivo
function GenerateNPCI() {
    var data = document.getElementById("D1").value;
    var hora = document.getElementById("H1").value;
    var local = document.getElementById("L1").value;
    var telefone = document.getElementById("T1").value;
    var ramal = document.getElementById("R1").value;
    var msg = "Prezado(a) colaborador(a),\n\nTentamos localizá-lo(a), hoje " + data + " às " + hora + " na Localidade " + local + "e tentamos contato via Telefone " + telefone + ", Tamal " + ramal + ", Teams e E-mail informados na abertura do chamado, mas não tivemos sucesso.\nPeço que entre em contato no ramal 3911/informando o melhor horário para atendimento."
    var script = msg;
    document.getElementById("NPCI").value = script;
}
//Copiar Nota de Pendência Contato Improdutivo
function CopyNPCI() {
    $("#NPCI").select();
    document.execCommand("copy");
}
