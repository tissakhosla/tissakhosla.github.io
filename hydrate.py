'''build pages from components'''

from locale import getpreferredencoding as _encoding

def _hydrate():

    cmps = ['top.html', 'header.html', 'main.html', 'footer.html', 'bottom.html']

    with open('docs/index.html', 'w',  encoding=_encoding(), newline='') as index:
        for c in cmps:
            with open(f'components/{c}', 'r', encoding=_encoding()) as file:
                content = file.read()
                index.write(content)
                index.write('\n')

if __name__ == "__main__":
    _hydrate()
