from PIL import Image
from PIL import Image, ImageFilter
# Đọc ảnh
image = Image.open('C:/Users/ADMIN/Desktop/web tư duy/Fashion-Design-master/imgs/header.png')

image = image.filter(ImageFilter.GaussianBlur(radius=0.8))  # Bạn có thể điều chỉnh radius

# Lưu ảnh mới
image.save('header.png')