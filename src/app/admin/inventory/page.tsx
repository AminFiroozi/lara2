
'use client';

import { useState } from 'react';
import { products } from '@/lib/mock-data';
import { PageHeader } from '@/components/admin/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';

export default function AdminInventoryPage() {
  const { toast } = useToast();
  const [selectedProduct, setSelectedProduct] = useState('');
  const [transactionType, setTransactionType] = useState('sell');
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const product = products.find((p) => p.id === selectedProduct);
    if (!product) {
      toast({
        title: 'خطا',
        description: 'لطفا یک محصول را انتخاب کنید.',
        variant: 'destructive',
      });
      return;
    }

    if (transactionType === 'sell' && product.inventory < quantity) {
        toast({
            title: 'خطا در موجودی',
            description: `موجودی محصول "${product.name}" کافی نیست. موجودی فعلی: ${product.inventory}`,
            variant: 'destructive',
        });
        return;
    }
    
    // NOTE: This updates the mock data in memory.
    // In a real application, you would send this to a server to update the database.
    if (transactionType === 'sell') {
        product.inventory -= quantity;
    } else {
        product.inventory += quantity;
    }

    toast({
        title: 'موفقیت‌آمیز',
        description: `موجودی محصول "${product.name}" با موفقیت به‌روزرسانی شد. موجودی جدید: ${product.inventory}`,
    });

    // Reset form
    setSelectedProduct('');
    setQuantity(1);
    setTransactionType('sell');
  };


  return (
    <div className='w-full'>
      <PageHeader
        title="مدیریت موجودی"
        description="فروش یا خرید جدید را برای به‌روزرسانی موجودی ثبت کنید."
      />
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>ثبت تراکنش جدید</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="product">انتخاب محصول</Label>
              <Select
                value={selectedProduct}
                onValueChange={setSelectedProduct}
              >
                <SelectTrigger id="product">
                  <SelectValue placeholder="یک محصول را انتخاب کنید..." />
                </SelectTrigger>
                <SelectContent>
                  {products.map((product) => (
                    <SelectItem key={product.id} value={product.id}>
                      {product.name} (موجودی: {product.inventory})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>نوع تراکنش</Label>
              <RadioGroup
                defaultValue="sell"
                value={transactionType}
                onValueChange={setTransactionType}
                className="flex gap-4"
              >
                <div className="flex items-center space-x-2 space-x-reverse">
                  <RadioGroupItem value="sell" id="sell" />
                  <Label htmlFor="sell">فروش (کاهش از موجودی)</Label>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <RadioGroupItem value="buy" id="buy" />
                  <Label htmlFor="buy">خرید (افزایش به موجودی)</Label>
                </div>
              </RadioGroup>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="quantity">تعداد</Label>
              <Input
                id="quantity"
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                required
              />
            </div>

            <Button type="submit" className="w-full">
              ثبت و به‌روزرسانی موجودی
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
