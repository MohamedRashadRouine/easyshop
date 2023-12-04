import os

def list_files(startpath):
    for root, dirs, files in os.walk(startpath):
        level = root.replace(startpath, '').count(os.sep)
        indent = ' ' * 4 * (level)
        print('{}{}/'.format(indent, os.path.basename(root)))
        subindent = ' ' * 4 * (level + 1)
        for f in files:
            # Check if the file is not in the root directory
            if os.path.join(root, f) != startpath:
                print('{}{}'.format(subindent, f))

# Replace 'your_project_directory' with your actual project directory path
project_directory = './src'

list_files(project_directory)
