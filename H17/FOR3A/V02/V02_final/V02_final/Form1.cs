using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace V02_final
{
    public partial class Form1 : Form
    {
        Graphics surface1;
        Pen pen1;
        Point mousePos;

        int diffX, diffY;
        Point oldMousePos;
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            surface1 = this.CreateGraphics();
            pen1 = new Pen(Color.Black);

        }

        private void Form1_MouseDown(object sender, MouseEventArgs e)
        {

            int newX = (mousePos.X / 20) * 20;
            int newY = (mousePos.Y / 20) * 20;
        }

        private void button1_Paint(object sender, PaintEventArgs e)
        {

        }

        private void button1_MouseMove(object sender, MouseEventArgs e)
        {

        }

        private void Form1_MouseMove(object sender, MouseEventArgs e)
        {
            Invalidate();
        }

        private void Form1_Paint(object sender, PaintEventArgs e)
        {
            mousePos = this.PointToClient(Cursor.Position);
            if (oldMousePos == null)
            {
                oldMousePos = mousePos;
            }

            diffX = mousePos.X - oldMousePos.X;
            diffY = mousePos.Y - oldMousePos.Y;

            surface1.DrawLine(pen1, mousePos.X, mousePos.Y, mousePos.X - 10 * diffX, mousePos.Y - 10 * diffY);

            oldMousePos = mousePos;
        }

        private void button1_Click(object sender, EventArgs e)
        {
            DialogResult result = colorDialog1.ShowDialog();
            if (result == DialogResult.OK)
            {
                pen1 = new Pen(colorDialog1.Color, 1.0f);
            }
        }
    }
}
