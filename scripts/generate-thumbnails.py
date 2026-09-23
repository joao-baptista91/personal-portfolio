# scripts/generate-thumbnails.py
#
# Gera as miniaturas da galeria de cada projeto (as imagens pequenas por baixo da imagem
# principal, em project.html).
#
# Porquê: cada miniatura aparece com 64x44px, mas antes carregava a captura inteira (1920px,
# até ~1MB cada). Num projeto com 12 capturas, isso eram 12 imagens completas só para as
# miniaturas, e durante uns segundos apareciam caixas vazias. As miniaturas geradas aqui têm
# 192px de largura (3x o tamanho mostrado, para ecrãs de alta resolução) e pesam poucos KB.
#
# Para cada captura em assets/images/app-screenshots/<projeto>/nome.png, cria
# assets/images/app-screenshots/<projeto>/thumbs/nome.jpg. O js/project.js procura a
# miniatura nesse caminho e, se não existir, usa a captura original (por isso nada parte se te
# esqueceres de correr isto; só fica mais lento).
#
# Quando correr: sempre que acrescentares ou substituíres capturas de um projeto.
#   python scripts/generate-thumbnails.py
#
# Só volta a gerar as miniaturas cuja captura original seja mais recente do que a miniatura.
# Precisa do Pillow (pip install Pillow).

import os
import sys

from PIL import Image

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
SCREENSHOTS_DIR = os.path.join(ROOT, "assets", "images", "app-screenshots")
THUMB_WIDTH = 192
JPEG_QUALITY = 82
IMAGE_EXTENSIONS = (".png", ".jpg", ".jpeg", ".webp")


def main():
    created = 0
    skipped = 0
    for project in sorted(os.listdir(SCREENSHOTS_DIR)):
        project_dir = os.path.join(SCREENSHOTS_DIR, project)
        if not os.path.isdir(project_dir):
            continue
        thumbs_dir = os.path.join(project_dir, "thumbs")
        for name in sorted(os.listdir(project_dir)):
            source = os.path.join(project_dir, name)
            if not os.path.isfile(source) or not name.lower().endswith(IMAGE_EXTENSIONS):
                continue
            target = os.path.join(thumbs_dir, os.path.splitext(name)[0] + ".jpg")
            if os.path.exists(target) and os.path.getmtime(target) >= os.path.getmtime(source):
                skipped += 1
                continue

            os.makedirs(thumbs_dir, exist_ok=True)
            with Image.open(source) as img:
                img = img.convert("RGB")
                height = round(img.height * THUMB_WIDTH / img.width)
                thumb = img.resize((THUMB_WIDTH, height), Image.LANCZOS)
                thumb.save(target, "JPEG", quality=JPEG_QUALITY, optimize=True, progressive=True)
            created += 1
            print(f"  {project}/thumbs/{os.path.basename(target)}  ({os.path.getsize(target) // 1024} KB)")

    print(f"\n{created} miniatura(s) criada(s), {skipped} já estavam atualizadas.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
