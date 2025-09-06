#!/usr/bin/env python3
"""
Servidor de desenvolvimento para o site Mostardinha
Usando Python para servir os arquivos buildados
"""

import os
import sys
import http.server
import socketserver
from pathlib import Path

# Configuração
PORT = 3000
DIRECTORY = "dist"

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)
    
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

def main():
    # Verificar se o diretório dist existe
    if not Path(DIRECTORY).exists():
        print(f"❌ Diretório {DIRECTORY} não encontrado!")
        print("Execute 'npm run build' primeiro.")
        sys.exit(1)
    
    # Configurar servidor
    handler = CustomHTTPRequestHandler
    
    try:
        with socketserver.TCPServer(("0.0.0.0", PORT), handler) as httpd:
            print(f"🚀 Servidor Mostardinha rodando em http://0.0.0.0:{PORT}")
            print(f"📁 Servindo arquivos de: {os.path.abspath(DIRECTORY)}")
            print("Pressione Ctrl+C para parar o servidor")
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n🛑 Servidor parado pelo usuário")
    except Exception as e:
        print(f"❌ Erro no servidor: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()