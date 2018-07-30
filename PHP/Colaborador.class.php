<?php
class Colaborador {	
	
	private $_curl;
	
	public function __construct($curl) {
		$this->_curl = $curl;
	}		

	public function cadastro() {
		curl_setopt($this->curl, CURLOPT_URL, "http://hml.policard.com.br/SGP/CadastroColaborador.aspx");
		curl_setopt($this->curl, CURLOPT_FOLLOWLOCATION, false);
		curl_setopt($this->curl, CURLOPT_HEADER, true);
		curl_setopt($this->curl, CURLINFO_HEADER_OUT, true);
		
		$dom = new DOMDocument();
		@$dom->loadHTML($exec);
		@$xpath = new DOMXpath($dom);
		$nodes = $xpath->query('//input/@value');
	}
}
?> 